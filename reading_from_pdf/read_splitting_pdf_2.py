## Pip install pypdf2 : the only dependency to read pdf file.
from PyPDF2 import PdfFileReader, PdfFileWriter


def read_split_pdf(pg_number):
    """Spliting the whole thing"""

    pdf_karma = open('Influence.pdf', 'rb')
    pdf_file = PdfFileReader(pdf_karma, strict=False) 

    page_1 = pdf_file.getPage(pg_number)    
    text_page_1 = page_1.extractText()
    # print(text_page_1)

    after_split = text_page_1.split(".")
    # print(after_split)


    after_split_clean_1 = []
    for i in after_split:
        y = i.splitlines()
        z = ''
        for j in range(len(y)):
            z += y[j] + ' '
        after_split_clean_1.append(z)

    # print(after_split_clean_1[:-1])
    return(after_split_clean_1[:-1])



def remove_non_ascii_char(list_with_non_ascii_char):
    cleaned_sentences = []
    for string_with_nonASCII in list_with_non_ascii_char:
        encoded_string = string_with_nonASCII.encode("ascii", "ignore")
        decode_string = encoded_string.decode()
        cleaned_sentences.append(decode_string)
    return cleaned_sentences



def length_check(list_after_ascii_check):
    list_of_sentences_of_proper_length = []
    for i in range(len(list_after_ascii_check)):
        if 15 < len(list_after_ascii_check[i].split()) < 60:
            list_of_sentences_of_proper_length.append(list_after_ascii_check[i])
        else:
            pass
    return list_of_sentences_of_proper_length




def add_fullstop_and_remove_white_spaces(list_from_length_check):
    list_after_fullstop = []
    for i in list_from_length_check:
        list_after_fullstop.append(i[1:-1] + ".")
    return list_after_fullstop



def book_scrape(start, end):
    all_sentences = []
    for i in range(start, end+1):
        x = read_split_pdf(i)
        x = remove_non_ascii_char(x)
        # print(remove_non_ascii_char(x))

        x = length_check(x)
        # print(x)

        x = add_fullstop_and_remove_white_spaces(x)
        # print(x)
        all_sentences += x
    return (all_sentences, len(all_sentences))



# x = read_split_pdf(100)
# x = remove_non_ascii_char(x)
# # print(remove_non_ascii_char(x))

# x = length_check(x)
# # print(x)

# x = add_fullstop_and_remove_white_spaces(x)
# print(x)
