# Bard in Google Sheets as a Formula using Palm API
Using Google Palm API (that powers Bard) as a formula in Google Sheets

### Setup
1. Get your Palm API key [here](https://developers.generativeai.google/tutorials/setup)
2. Copy code from the repository with file name askai.js
3. Create new Apps Script project in Google Sheets (Extensions -> Appscript)
4. Paste as a new function in the Apps Script project.
5. Save

### Usage
Just like you use a formula to add numbers i.e. =SUM(A1..A3), you can now use generative AI within your Google sheets using the formula =ASKAI(A1) where the prompt is in A1 and the current cell is where you want the output to appear. 
