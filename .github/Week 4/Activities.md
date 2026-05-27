## Fixing "Get The Gold" Activity:
I was given the task to fix the broken variant of "Get The Gold" app which I did end up completing. One of the things causing an issue that made the app crash as it was subtracting time values. I fixed this by:
- Replacing with Clock1.Duration()
- Removing invalid currentTime variable
- Fixing crash caused by invalid time inputs
- Preventing TimerInterval from reaching 0 or negative values
  
Here is a photo of the fix:
<img width="456" height="359" alt="Screenshot 2026-05-27 113958" src="https://github.com/user-attachments/assets/daf4e515-1333-40f2-a15e-d5f4f0c10627" />

Another issue was the fact that the timer kept adding even after the score quota was reached.
Here are the fixes:
- Prevented infinite score increase
- Added limit so score stops at 5
- Fixed duplicate score updates from multiple sources

The reset button was not reseting properly and here are the fixes made:
- Reset now restores full game state
- Fixed timer not restarting correctly
- Reset sprite visibility
