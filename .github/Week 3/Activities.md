# Refactor Map it:
## Refactor 1 -- Poor Naming:
Before:

<img width="1050" height="710" alt="Screenshot 2026-05-20 101643" src="https://github.com/user-attachments/assets/532d719e-0321-4116-a36b-14262f660a53" />

After:

<img width="1057" height="687" alt="Screenshot 2026-05-20 101146" src="https://github.com/user-attachments/assets/7311e113-69e8-477c-9c07-9c2f4117313c" />

Changed the naming of:
- VerticalArrangment1 -- inputAddress
- VerticalArrangment2 -- selectAddress
- ListPicker1 -- savedLocations

These changes will make reading the code easier as the names tell what they affect. It also helps when looking at the blocks later because I don’t have to guess what each component is used for. Using better names also reduces confusion when adding more features later since everything is clearly labeled and easier to follow.

## Refactor 2 -- Large Class:
Before:

<img width="911" height="613" alt="Screenshot 2026-05-20 103313" src="https://github.com/user-attachments/assets/da4b2d73-124f-4bb3-9f8d-3dcd8aac1865" />

After:

<img width="1021" height="713" alt="Screenshot 2026-05-20 103512" src="https://github.com/user-attachments/assets/2c32c5ce-4e16-4ab8-9c29-746426ae4a0e" />

These changes will make reading the code easier as the names tell what they affect. It also helps when looking at the blocks later because I don’t have to guess what each component is used for. Using better names also reduces confusion when adding more features later since everything is clearly labeled and easier to follow.

## Refactor 3 -- Duplicate Code/Long Method:
Before:

<img width="1051" height="642" alt="Screenshot 2026-05-20 111626" src="https://github.com/user-attachments/assets/7180ec04-8522-411e-b9cc-727d32caae30" />

After:

<img width="1043" height="615" alt="Screenshot 2026-05-20 111812" src="https://github.com/user-attachments/assets/076b3a92-5e39-4056-973b-ac32ecfa355a" />



For this I made "updateListView" as a reusable block that is easily implemented by just calling it and I made Screen1 to initialize "initView" and "updateListView". This helps reduce repeating the same blocks multiple times and keeps the code shorter. It also makes future changes easier because if I need to change how the list updates, I only need to change it in one place instead of everywhere it’s used. It also improves consistency since the same logic is always used when updating the list.
