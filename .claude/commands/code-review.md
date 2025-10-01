---
allowed-tools: Bash(git diff:*), Bash(git log:*)
description: Perform a comprehensive code review of recent changes
---

## Context

- Current git status: !`git status`
- Recent changes: !`git diff HEAD~1`
- Recent commits: !`git log --oneline -5`
- Current branch: !`git branch --show-current`

## Your task

My developer just made changes to the code. I want to make sure they did a good job. Can you review their work?
I want this to be really clean, readable code, DRY and look for opportunities where it should have edited existing code rather than adding new code.. Perform a comprehensive code review focusing on:

1. **Code Quality**: Check for readability, maintainability, and adherence to best practices
2. **Security**: Look for potential vulnerabilities or security issues
3. **Performance**: Identify potential performance bottlenecks
4. **Documentation**: Check if code is properly documented

Provide specific, actionable feedback with line-by-line comments where appropriate.