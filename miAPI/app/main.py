from fastapi import FastAPI
from app.routers import usuarios
from app.data.db import engine
from app.data import usuarioDB
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="API usuarios ",
    description="Artemio Hurtado",
    version="1.0.0"
)

# En desarrollo permitimos cualquier origen (tu app/frontend puede correr
# en cualquier puerto: Expo web, emulador, etc.). En produccion cambia
# "*" por la lista real de origenes permitidos.
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

#pertenece al funcionamiento del ORM de SQLAlchemy y sirve para
#crear automáticamente las tablas en la base de datos si aún no existen.
usuarioDB.Base.metadata.create_all(bind=engine)

app.include_router(usuarios.router)