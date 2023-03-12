import uuid
from .models import Patient
from datetime import datetime
from pydantic import BaseModel, validator, EmailStr

from fastapi import File, UploadFile


class PatientCreate(BaseModel):
    id: str = None
    # id: uuid.UUID = None
    name: str
    age: int
    gender: str = "male"
    phone: str
    address: str
    # doctor_id: uuid.UUID = None
    doctor_id: str = None


class PatientResponse(BaseModel):
    # id: uuid.UUID
    id: str
    name: str
    age: int
    gender: str
    phone: str
    address: str
    doctor_id: str
    created_at: datetime
    # doctor_id: uuid.UUID

    @staticmethod
    def parse(data):
        """parses data"""
        def parse_one(data):
            return PatientResponse(**{
                "id": data.id,
                "name": data.name,
                "age": data.age,
                "gender": data.gender,
                "phone": data.phone,
                "address": data.address,
                "doctor_id": data.doctor_id,
                "created_at": data.created_at
            })
        if isinstance(data, list):
            return [parse_one(item) for item in data]
        return parse_one(data)


class PatientRecordCreate(BaseModel):
    # id: uuid.UUID = None
    id: str = None
    date: datetime = datetime.now()
    checkup_data: str = None
    condition: str = None
    image_path: str = None
    # patient_id: uuid.UUID = None
    patient_id: str = None


class PatientRecordResponse(BaseModel):
    # id: uuid.UUID = None
    id: str = None
    date: datetime = None
    checkup_data: str = None
    condition: str = None
    image_path: str = None
    # patient_id: uuid.UUID = None
    patient_id: str = None
    created_at: datetime

    @staticmethod
    def parse(data):
        """parses data"""
        def parse_one(data):
            return PatientRecordResponse(**{
                "id": data.id,
                "date": data.date,
                "checkup_data": data.checkup_data,
                "condition": data.condition,
                "image_path": data.image_path,
                "patient_id": data.patient_id,
                "created_at": data.created_at
            })
        if isinstance(data, list):
            return [parse_one(item) for item in data]
        return parse_one(data)
