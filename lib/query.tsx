export const GRAFIK = `
query{
  grafik{
   data{
    attributes{
      Naglowek
      CzyWidoczne
    }
  }
}`;
export const KONTAKT = `
query{
  kontakt{
    data{
        attributes{
          AdresNazwa
          AdresUlica
          AdresMiasto
          KontaktEmail
          KontaktTelefon
          Naglowek
          CzyWidoczne
          SpolecznoscFacebook
          SpolecznoscInstagram
          SpolecznoscYoutube
          Wspolprace{
            data{
              attributes{
                formats
                  
                
              }
            }
          }
        }
      }
    }
  }
  `;
export const ONAS = `
query{
  onasAbout{
    data{
        attributes{
          Naglowek
          CzyWidoczne
          AkapitPierwszy
          AkapitDrugi
          AkapitTrzeci
        }
      }
         
  }
}`;

export const STRONA_GLOWNA = `
query{
  stronaGlowna{
    data{
        attributes{
          Naglowek
          TaniecWIdoczne
          RuchWidoczne
          FacebookWidoczne
          AktualnosciWidoczne
          ZdjecieWTle{
            data{
              attributes{
                name
                url
                formats
              }
            }
          }
          Tlo{
            data{
              attributes{
                name
                url
                formats
              }
            }
          }
          Aktualnosci{
            data{
              attributes{
                name
                url
                formats
              }
            }
          }
        }
      }
    }
  
}
       

`;
export const ZAJECIA = `
query{
  zajecia{
    data{
      attributes{
        Naglowek
        NaglowekTaniec
        NaglowekRuch
        AkapitTaniec
        AkapitRuch
        CzyWidoczne
        TaniecIMG{
          data{
            attributes{
              formats
                
              
            }
          }
        }
        RychIMG{
          data{
            attributes{
              formats
                
              
            }
          }
        }
      }
    }
  }
  }     

`;
export const TANIEC = `
query{
  taniecs{
    data{
      attributes{
        Nazwa
        Opis
        Slug
        Zdjecie{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}     
`;
export const RUCH = `
query{
  ruches{
    data{
      attributes{
        Nazwa
        Opis
        Slug
        Zdjecie{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}     
`;
export const LOGO = `
query{
  nawigacja{
    data{
      attributes{
        Logo{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
  }    
`;
