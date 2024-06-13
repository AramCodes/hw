/*The veterinarians want to retrieve the pet name, date of the appointment and the reason for the appointment. Use aliases for all 
column names.*/
SELECT PET_NAME AS Pet, APPOINTMENT_DATE AS Appointment, APPOINTMENT_REASON AS Reason
FROM Pet JOIN  APPOINTMENTS USING (PET_ID);

/*The veterinarians want to a list of all the pets including the appointment id. Include all the pets even if they have not had 
an appointment.*/
SELECT Pet.PET_ID, PET_NAME, OWNER_ID, APPOINTMENT_ID
FROM Pet LEFT JOIN Appointments  ON Pet.PET_ID = Appointments.PET_ID ;

/*The veterinarians want a list of all the treatments and those that have not been used.*/
SELECT
Treatment.TREATMENT_ID, APPOINTMENT_ID, TREATMENT_PLAN
FROM Treatment_Appt RIGHT JOIN Treatment ON  Treatment_Appt.TREATMENT_ID = Treatment.TREATMENT_ID;

/*The veterinarians want a list of Owner and Pet data. Use an alias when joining the tables.*/
SELECT OWNER_LNAME, OWNER_PHONE, PET_NAME, PET_BREED
FROM Owner O JOIN Pet P on O.OWNER_ID = P.OWNER_ID;

-- The veterinarians want to retrieve the owner last name, pet name, date of the appointment, treatment plan and 
-- diagnosis. Use appropriate column aliases.
SELECT OWNER_LNAME as Owner, PET_NAME AS Pet, APPOINTMENT_DATE AS Appointment, TREATMENT_PLAN AS Plan, DIAGNOSIS
FROM  Owner JOIN Pet USING (OWNER_ID) 
JOIN  APPOINTMENTS USING (PET_ID)
JOIN Treatment_appt USING (APPOINTMENT_ID )
JOIN Treatment USING (TREATMENT_ID) ;


-- The veterinarians want a list of all the pets ordered by breed and owner id.
SELECT PET_BREED , PET_NAME, OWNER_ID
FROM Pet
ORDER BY PET_BREED, OWNER_ID;

-- The veterinarians want list of all the appointments ordered by date descending. Make sure you include the name of the pet.
SELECT PET_NAME, APPOINTMENT_DATE, APPOINTMENT_REASON
FROM Pet JOIN Appointments USING (PET_ID)
ORDER BY APPOINTMENT_DATE DESC;

--The veterinarians want a list of all the breeds and names of the pets ordered by pet name ascending.
SELECT PET_NAME , PET_BREED
FROM Pet
ORDER BY PET_NAME;

--The veterinarians want to retrieve the owner last name, pet name, date of the appointment, treatment plan and diagnosis only for 
--cats. Use appropriate column aliases.
SELECT OWNER_LNAME as Owner, PET_NAME AS Pet, APPOINTMENT_DATE AS Appointment, TREATMENT_PLAN AS Plan, DIAGNOSIS
FROM  Owner JOIN Pet ON  Pet.OWNER_ID = Owner.OWNER_ID
JOIN  Appointments ON  APPOINTMENTS.PET_ID = Pet.PET_ID
JOIN Treatment_appt ON Appointments.APPOINTMENT_ID  = Treatment_appt.APPOINTMENT_ID
JOIN Treatment ON Treatment.TREATMENT_ID = Treatment_appt.TREATMENT_ID
WHERE SPECIES = 'Cat';

-- The veterinarians want the information for appointments scheduled for November 5th and beyond.
SELECT PET_NAME, OWNER_LNAME, APPOINTMENT_REASON, APPOINTMENT_DATE
FROM Owner, Pet, Appointments
WHERE Owner.OWNER_ID = Pet.OWNER_ID
AND Pet.PET_ID = Appointments.PET_ID
AND APPOINTMENT_DATE >= '2019-11-05'

-- The veterinarians want to know all appointments on October 30th that are cats.
SELECT PET_NAME, PET_BREED, APPOINTMENT_DATE, APPOINTMENT_REASON
FROM Pet JOIN Appointments ON Pet.PET_ID = Appointments.PET_ID
WHERE APPOINTMENT_DATE = '2019-10-30'
AND SPECIES = 'Cat';

-- The veterinarians want to know all appointments only with cats and birds.
SELECT PET_NAME, SPECIES, PET_BREED, APPOINTMENT_DATE, APPOINTMENT_REASON
FROM Pet JOIN Appointments ON Appointments.PET_ID = Pet.PET_ID
WHERE  SPECIES IN  ('Cat', 'Bird');

-- The veterinarians want to know the total for the invoices that have been paid.
SELECT SUM(INVOICE)
FROM APPOINTMENTS
WHERE PAID = 'Y';

-- The veterinarians want the information for appointments scheduled between October 19th and October 30.
SELECT PET_NAME, OWNER_LNAME, APPOINTMENT_REASON, APPOINTMENT_DATE
FROM Owner, Pet, Appointments
WHERE Owner.OWNER_ID = Pet.OWNER_ID
AND Pet.PET_ID = Appointments.PET_ID
AND APPOINTMENT_DATE  BETWEEN '2019-10-19' AND '2019-10-30'


-- The veterinarians want to sort the pets by species and group them by Owner. Use appropriate column aliases.
SELECT PET_ID AS ID, SPECIES, PET_BREED AS BREED, PET_NAME AS NAME, OWNER_ID
FROM PET
GROUP BY SPECIES, OWNER_ID
ORDER BY OWNER_ID;

-- The veterinarians want to know all appointments only with cats or dogs.
SELECT PET_NAME, SPECIES, PET_BREED, APPOINTMENT_DATE, APPOINTMENT_REASON
FROM Pet JOIN Appointments ON Appointments.PET_ID = Pet.PET_ID
WHERE  SPECIES ='Cat' OR SPECIES = 'Dog';