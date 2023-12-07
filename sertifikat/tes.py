#/var/www/html/redApp/sertifikat/sertifikat-env/bin/python3
import cgi
import cgitb
import json
import math
import statistics as stat
from datetime import datetime

# import library utk membuat file doc 
import docx
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Pt
from docx.shared import Inches

# Import library utk membuat file excel
import xlsxwriter

# Import doc to pdf converter
from docx2pdf import convert

cgitb.enable()
print("Content-Type: text/html\n")

doc = docx.Document('master.docx')

print(doc.paragraphs[2])
