import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0);
`;

const ImageDiv = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const GirisDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Icon = styled(FaXTwitter)`
  color: white;
  font-size: 22rem;
  margin: auto;
`;

const SagDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 50px;
  font-weight: 700;
`;

const Baslik1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const Baslik2 = styled.h1`
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const AltBaslik = styled.h2`
  font-size: 2rem;
`;

const GoogleButton = styled.button`
  font-size: 1.1rem;
  border: 1px solid white;
  padding: 10px 30px 10px 7px;
  border-radius: 20px;
  width: 40%;
  background-color: white;
  color: #221f1f;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const AppleButton = styled.button`
  font-size: 1.1rem;
  border: 1px solid white;
  padding: 10px 30px 10px 7px;
  border-radius: 20px;
  width: 40%;
  background-color: white;
  color: #221f1f;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const TwitterButton = styled.button`
  font-size: 1rem;
  border: 1px solid white;
  padding: 10px 30px 10px 7px;
  border-radius: 20px;
  width: 40%;
  background-color: rgb(29, 155, 240);
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
`;

const Text = styled.p`
  font-size: 12px;
  width: 40%;
`;

const BigText = styled.h1`
  font-size: 1rem;
  margin-top: 3rem;
`;

const SignInButton = styled.button`
  font-size: 1rem;
  border: 1px solid grey;
  padding: 12px 30px 12px 7px;
  border-radius: 20px;
  width: 40%;
  background-color: inherit;
  color: rgb(29, 155, 240);
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(29, 48, 60, 0.5);
    transition: all 0.5s;
  }
`;
const Footer = styled.div`
  display: flex;
  width: 100%;
`;
const FooterList = styled.ul`
  display: flex;
  background-color: inherit;
  gap: 0.9rem;
  list-style-type: none;
`;

const FooterListItem = styled.li`
  text-decoration: none;
  color: grey;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledFormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 550px;
  width: 550px;
  transform: translate(-50%, -50%);
  background-color: #565555;
  color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormText = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 80px;
  width: 65%;
  background-color: white;
  color: black;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const Label = styled.label`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 25px 80px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid whitesmoke;
`;

const StyledİleriButton = styled.button`
  margin-top: 20px;
  padding: 10px 80px;
  width: 65%;
  background-color: inherit;
  color: white;
  border-radius: 20px;
  border: 1px solid whitesmoke;
  cursor: pointer;
  font-weight: bold;
`;

const FormText = styled.p`
  margin-top: 2rem;
  font-size: 14px;
  text-align: left;
`;

const FormSpan = styled.span`
  color: blue;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const FormIcon = styled(LiaTimesSolid)`
  height: 1.5rem;
  width: 1.5rem;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transition: all 0.3s;
  }
`;

const StyledGirisFormICon = styled(FaXTwitter)`
  height: 2rem;
  width: 2rem;
  margin-left: 200px;
`;

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 550px;
  width: 550px;
  background-color: #565555;
  color: white;
  padding: 40px; /* Formun kenarlarında boşluk bırakmak için */
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Formu ortalamak için */
`;

const StyledHesapForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* İçeriği ortalamak için */
  width: 100%;
`;

const FormH1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  margin-left: -173px;
`;

const FormTextInput = styled.input`
  padding: 15px 10px;
  width: 100%;
  max-width: 400px; /* Kısaltılmış input genişliği */
  border-radius: 5px;
  border: 1px solid whitesmoke;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const FormNumberInput = styled.input`
  padding: 15px 10px;
  width: 100%;
  max-width: 400px; /* Kısaltılmış input genişliği */
  border-radius: 5px;
  border: 1px solid whitesmoke;
  font-size: 1.2rem;
  margin-top: 1.5rem;
`;

const FormAltText = styled.p`
  margin: 13px 0 10px;
  color: rgb(29, 155, 240);
  cursor: pointer;
  align-self: flex-end; /* Yazıyı sağa yaslamak için */
  margin-right: 65px;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledFormAltDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; /* Kısaltılmış genişlik */
  margin-top: 0;
  padding: 1rem;
  border-radius: 5px;
`;

const FormAltDivBaslik = styled.h2`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 8px;
  margin-left: -10px;
`;

const FormAltDivParagraf = styled.p`
  font-size: 12px;
  margin-top: 0;
  margin-left: -10px;
`;

const DateInputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px; /* Kısaltılmış genişlik */
  margin-top: 0;
  gap: 10px;
`;

const DateInput = styled.input`
  padding: 15px;
  width: 50%;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  font-size: 1rem;
  margin-left: -11px;
`;
const DateInput2 = styled.input`
  padding: 10px;
  width: 30%;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  font-size: 1rem;
`;
const DateInput3 = styled.input`
  padding: 10px;
  width: 30%;
  border-radius: 5px;
  border: 1px solid whitesmoke;
  font-size: 1rem;
  margin-right: -15px;
`;

const StyledİleriHesapButton = styled.button`
  margin-top: 20px;
  padding: 10px 80px;
  width: 100%;
  max-width: 428px; /* Kısaltılmış genişlik */
  background-color: inherit;
  color: white;
  border-radius: 20px;
  border: 1px solid whitesmoke;
  cursor: pointer;
  font-weight: bold;
`;

const FormHesapIcon = styled(LiaTimesSolid)`
  height: 1.5rem;
  width: 1.5rem;
  padding: 5px;
  align-self: flex-start;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transition: all 0.3s;
  }
`;

const StyledFormIcon = styled(FaXTwitter)`
  height: 2rem;
  width: 2rem;
  align-self: center; /* İkonu formun ortasında hizalamak için */
`;

const AnaSayfaButton = styled.button`
  font-size: 1.1rem;
  border: 1px solid white;
  padding: 10px 30px 10px 7px;
  border-radius: 20px;
  width: 60%;
  background-color: white;
  color: #221f1f;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 50px;
`;

const AnaSayfaGit = styled.h2`
  font-size: 1rem;
  text-align: center;
`;

const StyledSelect = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 50%;
`;

function TwitterGiris() {
  const [isGirisValid, setIsGirisValid] = useState(false);
  const [isHesapValid, setIsHesapValid] = useState(false);
  const [isHesapValid2, setIsHesapValid2] = useState(false);
  const [placeholder, setPlaceholder] = useState("E-posta veya Telefon ");
  const [isInputValue, setIsInputValue] = useState("E-posta kullan");

  const user = { isim: "", ePosta: "" };

  const { register, handleSubmit } = useForm({ defaultValues: user });

  const formSubmit = (data) => {
    console.log(data);
  };

  const handleGirisTrue = () => {
    setIsGirisValid(true);
  };

  const handleHesapTrue = () => {
    setIsHesapValid(true);
  };

  const handleHesapTrue2 = () => {
    setIsHesapValid2(true);
  };
  const history = useHistory();
  const handleHomeClick = () => {
    history.push("/home");
  };

  const handleInput = () => {
    if (placeholder === "E-posta") {
      setPlaceholder("Telefon");
      setIsInputValue("E-posta kullan");
    } else {
      setPlaceholder("E-posta");
      setIsInputValue("Telefon");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    setIsGirisValid(false);
    setIsHesapValid(false);
  };
  const handleCloseForm = () => {
    setIsGirisValid(false);
    setIsHesapValid(false);
  };

  useEffect(() => {
    if (isGirisValid) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (isHesapValid) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isGirisValid, isHesapValid]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <>
      <Container>
        <ImageDiv>
          <Icon />
        </ImageDiv>
        <GirisDiv>
          <SagDiv>
            <Baslik1>Şu anda olup</Baslik1>
            <Baslik2>bitenler</Baslik2>
            <AltBaslik>Hemen katıl.</AltBaslik>
            <GoogleButton>Google ile Oturum Aç</GoogleButton>
            <AppleButton>Apple ile kaydol</AppleButton>
            <TwitterButton onClick={handleHesapTrue}>
              Hesap oluştur
            </TwitterButton>
            {isHesapValid && (
              <FormContainer onSubmit={handleSubmit(formSubmit)}>
                <FormHesapIcon onClick={handleCloseForm} />
                <StyledFormIcon />
                <StyledHesapForm onSubmit={handleFormSubmit}>
                  <FormH1>Hesabını oluştur</FormH1>
                  <FormTextInput
                    type="text"
                    placeholder="İsim"
                    {...register("İsim")}
                  />
                  <FormNumberInput
                    type="number"
                    placeholder={placeholder}
                    {...register("e-Posta")}
                  />
                  <FormAltText onClick={handleInput}>
                    {isInputValue}
                  </FormAltText>
                  <StyledFormAltDiv>
                    <FormAltDivBaslik>Doğum Tarihi</FormAltDivBaslik>
                    <FormAltDivParagraf>
                      Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir
                      işletme, evcil hayvan veya başka bir şey için olsa bile
                      kendi yaşını doğrulaman gerekir.
                    </FormAltDivParagraf>
                  </StyledFormAltDiv>
                  <DateInputContainer>
                    <StyledSelect>
                      <option value="">Gün</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </StyledSelect>
                    <StyledSelect>
                      <option value="">Ay</option>
                      {months.map((month, index) => (
                        <option key={index} value={index + 1}>
                          {month}
                        </option>
                      ))}
                    </StyledSelect>
                    <StyledSelect>
                      <option value="">Yıl</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </StyledSelect>
                  </DateInputContainer>
                  <StyledİleriHesapButton onClick={handleHesapTrue2}>
                    İleri
                  </StyledİleriHesapButton>
                </StyledHesapForm>
              </FormContainer>
            )}
            {isHesapValid2 && (
              <FormContainer>
                <FormHesapIcon />
                <StyledFormIcon />
                <AnaSayfaGit>
                  Tebrikler! Hesabınız başarıyla oluşturuldu.
                </AnaSayfaGit>
                <AnaSayfaButton onClick={handleHomeClick}>
                  Ana Sayfa
                </AnaSayfaButton>
              </FormContainer>
            )}

            <Text>
              By signing up, you agree to the{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>
                Terms of Service
              </span>{" "}
              and{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>Privacy Policy</span>
              , including{" "}
              <span style={{ color: "rgb(29, 155, 240)" }}>Cookie Use.</span>
            </Text>
            <BigText>Zaten bir hesabın var mı?</BigText>
            <SignInButton onClick={handleGirisTrue}>Giriş yap</SignInButton>
            {isGirisValid && (
              <StyledFormContainer>
                <FormIcon onClick={handleCloseForm} />
                <StyledGirisFormICon />
                <StyledForm onSubmit={handleFormSubmit}>
                  <StyledFormText>X'e giriş yap</StyledFormText>
                  <Button>Google ile oturum açın</Button>
                  <Button>Apple ile giriş yap</Button>
                  <Label>
                    <Input type="text" placeholder="Kullanıcı adı:"></Input>
                  </Label>
                  <Button>İleri</Button>
                  <StyledİleriButton>Şifreni mi unuttun?</StyledİleriButton>
                  <FormText>
                    Henüz bir hesabın yok mu? <FormSpan>Kaydol</FormSpan>
                  </FormText>
                </StyledForm>
              </StyledFormContainer>
            )}
          </SagDiv>
        </GirisDiv>
      </Container>
      <Footer>
        <FooterList>
          <FooterListItem>Hakkında</FooterListItem>
          <FooterListItem>X uygulamasını indir</FooterListItem>
          <FooterListItem>Yardım Merkezi</FooterListItem>
          <FooterListItem>Hizmet Şartları</FooterListItem>
          <FooterListItem>Gizlilik Politikası</FooterListItem>
          <FooterListItem>Çerez Politikası</FooterListItem>
          <FooterListItem>Imprint</FooterListItem>
          <FooterListItem>Erişebilirlik</FooterListItem>
          <FooterListItem>Reklam bilgisi</FooterListItem>
          <FooterListItem>Blog</FooterListItem>
          <FooterListItem>Kariyer</FooterListItem>
          <FooterListItem>Marka Kaynakları</FooterListItem>
          <FooterListItem>Reklam</FooterListItem>
          <FooterListItem>Pazarlama</FooterListItem>
          <FooterListItem>İşletmeler İçin X</FooterListItem>
          <FooterListItem>Geliştiriciler</FooterListItem>
          <FooterListItem>Dizin</FooterListItem>
          <FooterListItem>Ayarlar</FooterListItem>
        </FooterList>
      </Footer>
    </>
  );
}

export default TwitterGiris;
