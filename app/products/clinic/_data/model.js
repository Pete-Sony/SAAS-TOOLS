import pg from 'pg'
import { DataTypes, Sequelize } from "sequelize"

const sequelize = new Sequelize('postgresql://postgres.wqcffldlsqeoshbcobzg:swedenclinic2025@aws-0-ap-south-1.pooler.supabase.com:5432/postgres', {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false, // Disable logging (optional)
});

const Appointment = sequelize.define('Appointment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  date: {
    type: DataTypes.DATEONLY,  // Stores date without time
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,  // Stores time without date
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,  // Store duration in minutes
    allowNull: false,
    validate: {
      min: 0,
      isIn: [[30, 60, 90, 120]]  // Allowed duration values
    }
  }
}
)

export const initDB = async () => {
  try {
    console.log("reached point 1")
    await sequelize.authenticate();
    console.log("reached point 2")
    await Appointment.sync();
    console.log('Database connected and model synced');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

export {sequelize, Appointment}