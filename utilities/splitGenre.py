import csv
import os

print("All Set!")

def separate_csv(input_file, output_folder, field_to_split):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    with open(input_file, 'r', encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        
        output_files = {}

        for row in reader:
            field_value = row[field_to_split]
            

            genres = field_value.split(", ")

            for genre in genres:
                print(f"Writing CSV for {genre} genre...")
                if genre not in output_files:

                    output_file_path = os.path.join(output_folder, f"{genre}.csv")
                    output_files[genre] = open(output_file_path, 'w', newline='', encoding="utf-8")
                    writer = csv.DictWriter(output_files[genre], fieldnames=reader.fieldnames)
                    writer.writeheader()
            else:
                writer = csv.DictWriter(output_files[genre], fieldnames=reader.fieldnames)

            writer.writerow(row)

    for file in output_files.values():
        file.close()

print("Done writing.") 

cwd = os.getcwd()
input_file = os.path.join(cwd,"../", "datasets", "movies.csv")
output_folder = os.path.join(cwd, "../", "datasets", "splitted")
field_to_split = "genre"

separate_csv(input_file, output_folder, field_to_split)
print(f"CSVs exported! Find them in {output_folder}")
