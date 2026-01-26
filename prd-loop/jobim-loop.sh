#!/bin/bash
# Jobim 2.0 PRD Loop - Long-running AI agent loop
# Based on Ralph Pattern by Geoffrey Huntley
# Usage: ./jobim-loop.sh [max_iterations]

set -e

MAX_ITERATIONS=${1:-10}
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PRD_FILE="$SCRIPT_DIR/prd.json"
PROGRESS_FILE="$SCRIPT_DIR/progress.txt"
ARCHIVE_DIR="$SCRIPT_DIR/archive"
LAST_BRANCH_FILE="$SCRIPT_DIR/.last-branch"

# Archive previous run if branch changed
if [ -f "$PRD_FILE" ] && [ -f "$LAST_BRANCH_FILE" ]; then
  CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
  LAST_BRANCH=$(cat "$LAST_BRANCH_FILE" 2>/dev/null || echo "")

  if [ -n "$CURRENT_BRANCH" ] && [ -n "$LAST_BRANCH" ] && [ "$CURRENT_BRANCH" != "$LAST_BRANCH" ]; then
    DATE=$(date +%Y-%m-%d)
    FOLDER_NAME=$(echo "$LAST_BRANCH" | sed 's|^jobim/||')
    ARCHIVE_FOLDER="$ARCHIVE_DIR/$DATE-$FOLDER_NAME"

    echo ""
    echo "Archiving previous run: $LAST_BRANCH"
    mkdir -p "$ARCHIVE_FOLDER"
    [ -f "$PRD_FILE" ] && cp "$PRD_FILE" "$ARCHIVE_FOLDER/"
    [ -f "$PROGRESS_FILE" ] && cp "$PROGRESS_FILE" "$ARCHIVE_FOLDER/"
    echo "   Archived to: $ARCHIVE_FOLDER"

    echo "# Jobim 2.0 Progress Log" > "$PROGRESS_FILE"
    echo "Started: $(date)" >> "$PROGRESS_FILE"
    echo "Project: $(jq -r '.project // "Unknown"' "$PRD_FILE" 2>/dev/null)" >> "$PROGRESS_FILE"
    echo "---" >> "$PROGRESS_FILE"
  fi
fi

# Track current branch
if [ -f "$PRD_FILE" ]; then
  CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
  if [ -n "$CURRENT_BRANCH" ]; then
    echo "$CURRENT_BRANCH" > "$LAST_BRANCH_FILE"
  fi
fi

# Initialize progress file if it doesn't exist
if [ ! -f "$PROGRESS_FILE" ]; then
  echo "# Jobim 2.0 Progress Log" > "$PROGRESS_FILE"
  echo "Started: $(date)" >> "$PROGRESS_FILE"
  if [ -f "$PRD_FILE" ]; then
    echo "Project: $(jq -r '.project // "Unknown"' "$PRD_FILE" 2>/dev/null)" >> "$PROGRESS_FILE"
  fi
  echo "---" >> "$PROGRESS_FILE"
fi

# Banner
echo ""
echo "     _       _     _            ____    ___  "
echo "    | | ___ | |__ (_)_ __ ___  |___ \  / _ \ "
echo " _  | |/ _ \| '_ \| | '_ \` _ \   __) || | | |"
echo "| |_| | (_) | |_) | | | | | | | / __/ | |_| |"
echo " \___/ \___/|_.__/|_|_| |_| |_||_____(_)___/ "
echo ""
echo "PRD Loop Mode - Max iterations: $MAX_ITERATIONS"
echo ""

# Check if PRD exists
if [ ! -f "$PRD_FILE" ]; then
  echo "Error: No PRD found at $PRD_FILE"
  echo "Create a prd.json first with your feature stories"
  exit 1
fi

# Show PRD status
echo "PRD Status:"
echo "  Project: $(jq -r '.project' "$PRD_FILE")"
echo "  Branch: $(jq -r '.branchName' "$PRD_FILE")"
TOTAL_STORIES=$(jq '.userStories | length' "$PRD_FILE")
DONE_STORIES=$(jq '[.userStories[] | select(.passes == true)] | length' "$PRD_FILE")
echo "  Stories: $DONE_STORIES/$TOTAL_STORIES complete"
echo ""

# Main loop
for i in $(seq 1 $MAX_ITERATIONS); do
  echo ""
  echo "======================================================="
  echo "  Jobim 2.0 Iteration $i of $MAX_ITERATIONS"
  echo "======================================================="

  # Check remaining stories
  REMAINING=$(jq '[.userStories[] | select(.passes == false)] | length' "$PRD_FILE")
  if [ "$REMAINING" -eq 0 ]; then
    echo ""
    echo "All stories complete!"
    exit 0
  fi

  # Show next story
  NEXT_STORY=$(jq -r '[.userStories[] | select(.passes == false)] | sort_by(.priority) | .[0] | "\(.id): \(.title)"' "$PRD_FILE")
  echo "Next story: $NEXT_STORY"
  echo ""

  # Run Claude Code with the prompt
  OUTPUT=$(cat "$SCRIPT_DIR/prompt.md" | claude --dangerously-skip-permissions 2>&1 | tee /dev/stderr) || true

  # Check for completion signal
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo ""
    echo "Jobim 2.0 completed all tasks!"
    echo "Completed at iteration $i of $MAX_ITERATIONS"
    exit 0
  fi

  echo "Iteration $i complete. Continuing..."
  sleep 2
done

echo ""
echo "Jobim 2.0 reached max iterations ($MAX_ITERATIONS) without completing all tasks."
echo "Check $PROGRESS_FILE for status."
echo ""
echo "Remaining stories:"
jq -r '.userStories[] | select(.passes == false) | "  - \(.id): \(.title)"' "$PRD_FILE"
exit 1
