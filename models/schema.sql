-- Drops the dogspawdb if it exists currently --
DROP DATABASE IF EXISTS o4uecp5rn6ya68qw;

-- Creates the "dogspawdb" database --
CREATE DATABASE o4uecp5rn6ya68qw;

-- Makes it so all of the following code will affect dogspawdb --
USE o4uecp5rn6ya68qw;

-- Creates the table "appt_request" within dogspawdb --
CREATE TABLE appt_request (

-- Creates columns in table below --
  id INTEGER NOT NULL AUTO_INCREMENT,
  pet_name VARCHAR(100) NOT NULL,
  pet_breed VARCHAR(100) NOT NULL,
  pet_age INTEGER(2) NOT NULL,
  pet_weight INTEGER(3) NOT NULL,
  rabies_vaccination BOOLEAN DEFAULT false,
  
  -- Services that can be chosen --
  14_step_spaw BOOLEAN DEFAULT false,
  
  -- Additional Services that can be added onto the 14 step spaw service --
  de_shedding BOOLEAN DEFAULT false,
  pad_treatment BOOLEAN DEFAULT false,
  shave_down BOOLEAN DEFAULT false,
  clips BOOLEAN DEFAULT false,
  flee_tick BOOLEAN DEFAULT false,
  teeth_brush BOOLEAN DEFAULT false,
  pawdicure BOOLEAN DEFAULT false,
  hair_color BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

