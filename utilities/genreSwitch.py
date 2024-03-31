import csv
print("all set")

# Define the path to the existing CSV file and the path to the updated CSV file
existing_csv_file = 'dataset.csv'
updated_csv_file = 'updated_file.csv'

# Define the name of the new field to be added
new_field_name = 'new_field'

# Function to add a new field to each row in the CSV data
def add_new_field(csv_reader):
    # Read the header row
    header = next(csv_reader)
    
    # Add the new field name to the header
    header.append(new_field_name)

    # Yield the updated header
    yield header
    
    # Iterate over the remaining rows and add the new field value to each row
    for row in csv_reader:
        # Add the new field value (you can modify this logic as needed)
        new_field_value = 'new_value'
        
        # Append the new field value to the row
        row.append(new_field_value)
        
        # Yield the updated row
        yield row
print("hello")
# Read the existing CSV file and write the updated data to the updated CSV file
with open(existing_csv_file, 'r', newline='', encoding="utf8") as infile, \
     open(updated_csv_file, 'w', newline='', encoding="utf8") as outfile:

    # Create a CSV reader object
    csv_reader = csv.reader(infile)
    
    # Create a CSV writer object
    csv_writer = csv.writer(outfile)
    
    # Use the add_new_field function to update each row
    updated_rows = add_new_field(csv_reader)
    
    # Write the updated data to the updated CSV file
    csv_writer.writerows(updated_rows)

print("New field added successfully.")

