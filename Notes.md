# Notes

## Restructure

- Moved Record management into RecordService and set to use Subject/Observable, can easily be refactored to call an actual API/WebService
- Moved SurfaceType and Grade collections into AttributeService.
- Refactored RecordList into it's own component, home component is now a container component.
- Moved record.ts into data

## Added

- Add new Record in CreateRecordComponent
- Ability to Delete a Record directly from RecordList
- Grade and SurfaceType descriptors now display in the RecordList table

##Further Notes

- Clearing the RecordList will correctly reset the nextId 
- nextId is set by the RecordService, meaning a change in default data/ migration to API will retain the correct nextId
- Some assumptions were made regarding the SurfaceTypes and Grades not being updated, so are only called for once on AttributeService init, minimizing data calls.

## UI Update

- Added angular material and gave the UI some simple stying updates.

## Tests

- Updated tests for CreateRecord component to cover basic requirements of the Component.

