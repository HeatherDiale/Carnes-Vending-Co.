import os

from . import PROJECT_DIR

from dotenv import load_dotenv

DOTENV_PATH = os.path.join(PROJECT_DIR, '.env')

load_dotenv(DOTENV_PATH)

from base import *
