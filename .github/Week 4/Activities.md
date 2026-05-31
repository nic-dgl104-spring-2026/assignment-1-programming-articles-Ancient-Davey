## Fixing "Get The Gold" Activity:
I was given the task to fix the broken variant of "Get The Gold" app which I did end up completing. One of the things causing an issue that made the app crash as it was subtracting time values. I fixed this by:
- Replacing with Clock1.Duration()
- Removing invalid currentTime variable
- Fixing crash caused by invalid time inputs
- Preventing TimerInterval from reaching 0 or negative values
  
Here is a photo of the fix:
<img width="606" height="455" alt="Screenshot 2026-05-27 114624" src="https://github.com/user-attachments/assets/dc8ef3e5-1192-4865-96ac-9fad87409a0c" />


Another issue was the fact that the timer kept adding even after the score quota was reached.
Here are the fixes:
- Prevented infinite score increase
- Added limit so score stops at 5
- Fixed duplicate score updates from multiple sources

The reset button was not reseting properly and here are the fixes made:
- Reset now restores full game state
- Fixed timer not restarting correctly
- Reset sprite visibility


## Build an MVP for A12 Project:
User Testing:
Problem:
User found that the "X" button to exit the list counted as a wrong answer triggering the score to drop. Other than the first issue the testing proceeded without any other issues.

The Fix:
I made any other option other than the answers count as null.

<img width="567" height="467" alt="Made Exit List Null" src="https://github.com/user-attachments/assets/16f10f4f-21fe-438f-8e2b-44c542db8560" />



