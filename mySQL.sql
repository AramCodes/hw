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

-- Creating a trigger to update the product QOH when a line is adde (purchase made)
USE CH08_SALECO;
DROP TRIGGER IF EXISTS TRG_UPDATE_PQOH;
DELIMITER $$
CREATE TRIGGER TRG_UPDATE_PQOH
AFTER INSERT ON LINE
FOR EACH ROW
BEGIN
    IF NEW.LINE_UNITS IS NOT NULL THEN
        UPDATE PRODUCT
        SET P_QOH = P_QOH - NEW.LINE_UNITS
        WHERE PRODUCT.P_CODE = NEW.P_CODE;
    END IF;
END;
$$

DELIMITER ;

-- Creating a table with rows for member's id, firstname, lastname, phone, email, and join date
CREATE TABLE MEMBER (
    MEM_ID INT PRIMARY KEY,
    MEM_FNAME VARCHAR(20) NOT NULL,
    MEM_LNAME VARCHAR(20) NOT NULL,
    MEM_PHONE VARCHAR(20) NOT NULL,
    MEM_EMAIL VARCHAR(50) NOT NULL,
    MEM_JOINDATE DATE NOT NULL
);

-- create an account table and creat a realation (link) it to member table
CREATE TABLE ACCOUNT (
    ACC_ID INT PRIMARY KEY,
    ACC_OPENDATE DATE NOT NULL,
    ACC_CLOSE DATE,
    ACC_BALANCE DECIMAL(10,2) DEFAULT 0.00 NOT NULL,
    ACC_LIMIT DECIMAL(10,2) DEFAULT 5000 NOT NULL,
    MEM_ID INT NOT NULL,

    CONSTRAINT ACCOUNT_MEM_ID_FK 
    FOREIGN KEY (MEM_ID) REFERENCES MEMBER(MEM_ID)
);

-- ADD A SUCCESS MESSAGE TO DBMS WHEN A ROW IS SUCCESFFULLY ADDED
SET SERVEROUTPUT ON
BEGIN
INSERT INTO Treatment
VALUES (9, 'Give more greens', 'Eating grass');
DBMS_OUTPUT.PUTLINE('New row added to Treatment');
END;