# Electrons Around the Cores - TODO List

## Task: Given an array of 4–6 dice values (1–6), return the sum of "electrons" around each die's core

### TODO Items:
1. `[1, 2, 3, 4, 5]` → 6
2. `[2, 2, 3, 3]` → 4
3. `[6, 6, 4, 4, 1, 3]` → 2
4. `[3, 5, 3, 5, 4, 2]` → 12
5. **A single 1** - Has a core but 0 electrons → return 0
6. **A single 3** - Core with 2 electrons → return 2
7. **A single 5** - Core with 4 electrons → return 4
8. **A single even number (2, 4, or 6)** - No core → return 0
9. **All zero-contributing faces** - Array of only 1s and even faces → return 0
