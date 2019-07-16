-- Drops the dogspawdb if it exists currently --
DROP DATABASE IF EXISTS dogspawdb;
-- Creates the "dogspawdb" database --
CREATE DATABASE dogspawdb;

-- Makes it so all of the following code will affect dogspawdb --
USE dogspawdb;

-- Creates the table "appt_request" within dogspawdb --
CREATE TABLE appt_request (

-- Creates columns in table below
  id INTEGER NOT NULL AUTO_INCREMENT,
  pet_name VARCHAR(100) NOT NULL,
  pet_breed VARCHAR(100) NOT NULL,
  pet_age INTEGER(2),
  pet_weight INTEGER(3),
  rabies_vaccination BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

