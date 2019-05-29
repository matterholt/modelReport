# FEA report

Initial build completed. Page is currently based on the report that is in current work flow. Next steps is to make the app more dynamic by getting data from a json file. Apply logic to allow be able to use multiple model and allow data to continue to change as model are developed

> The need "mock up" data due to the results is planned to be extracted from a working document in excel. Future hope to include a db of all results.

Plans also include improving the UX and UI of the App. Areas of concerns are layout, color and making sure that when the user looks at report they can see if the cm has improved or not.

---

## Build plans for Logic

1. In the App component. Bring data from json file and pass it to components.

2. Pass analysis type and name of model into the header component.

3. From json extract weight and calculate where the cm model is at on weight.

4. Get all displacement value (Target, Previous model, Cm model) from json.

   - Target values should never change

   - Base model is the model that was used to apply for improvements. So will referenced by current model json data structure.

5. Data compiled in table create a summary page. By showing if the results have decreased.

---

## Build plans for UX and UI

1. Improve table layout, The top row should be removed does not fit in table

2. Colors, table column should be a different color for target base and cm

3. Change they layout to display the most important part of the results.

   - Analysis Summary, description with image at the tp followed by the table. Weight can be tied with the model description.

4. Add a smaller screen for

## Feature Ideas

- Drop down with all to allow user to compare different results

- Add Green if above 100%, Red if below, etc.
