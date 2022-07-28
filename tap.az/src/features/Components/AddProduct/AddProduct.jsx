import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/products/productSlice";
const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [city, setCity] = useState("");
  const [productName, setProductName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [gender, setGender] = useState("");
  const [productType, setProductType] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumb, setPhoneNumb] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(addProduct({ productName, price, city, category, isNew, delivery, img, productType, gender, name, email, phoneNumb }));
    e.preventDefault();
  };

  let categoryName = category.split("/")[1];
  console.log(categoryName);
  return (
    <div className="w-50 mx-auto">
      <h3>Yeni elan</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Kateqoriya</Label>
          <select className="form-control js-category-select" name="lot[category_path]" id="lot_category_path" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Siyahıdan seçin</option>
            <optgroup label="Uşaq aləmi">
              <option photos-required="1" value="elanlar/usaqlar-ucun/avtomobil-oturacaqlari">
                Avtomobil oturacaqları
              </option>
              <option value="elanlar/usaqlar-ucun/qidalanma-ucun-usaq-oturacaqlar">Qidalanma üçün uşaq oturacaqları</option>
              <option value="elanlar/usaqlar-ucun/oyuncaqlar">Oyuncaqlar</option>
              <option value="elanlar/usaqlar-ucun/usaq-arabalari">Uşaq arabaları</option>
              <option value="elanlar/usaqlar-ucun/usaq-avtomobilleri">Uşaq avtomobilləri</option>
              <option value="elanlar/usaqlar-ucun/usaq-carpayilari-ve-beshikler">Uşaq çarpayıları və beşiklər</option>
              <option value="elanlar/usaqlar-ucun/usaq-dasiyicilari">Uşaq daşıyıcıları</option>
              <option value="elanlar/usaqlar-ucun/usaq-geyimleri">Uşaq geyimi</option>
              <option value="elanlar/usaqlar-ucun/mebel">Uşaq mebeli</option>
              <option value="elanlar/usaqlar-ucun/usaq-yemekleri">Uşaq qidası</option>
              <option value="elanlar/usaqlar-ucun/usaq-suruskenleri-ve-oyun-meydancalari">Uşaq sürüşkənləri və oyun meydançaları</option>
              <option value="elanlar/usaqlar-ucun/manejler">Manejlər</option>
              <option value="elanlar/usaqlar-ucun/mekteb-levazimatlari">Məktəblilər üçün</option>
              <option value="elanlar/usaqlar-ucun/yurutecler">Yürütəclər</option>
              <option value="elanlar/usaqlar-ucun/her-sey">Digər</option>
            </optgroup>
            <optgroup label="Şəxsi əşyalar">
              <option value="elanlar/sexsi-esyalar/geyim-ayaqqabilar">Geyim və ayaqqabılar</option>
              <option value="elanlar/sexsi-esyalar/saatlar-zinet-esyalari">Saat və zinət əşyaları</option>
              <option value="elanlar/sexsi-esyalar/aksesuarlar">Aksesuarlar</option>
              <option value="elanlar/sexsi-esyalar/gozellik-saglamliq">Sağlamlıq və gözəllik</option>
              <option value="elanlar/sexsi-esyalar/itmis-esyalar">İtmiş əşyalar</option>
            </optgroup>
            <optgroup label="Ev və bağ üçün">
              <option value="elanlar/ev-ve-bag-ucun/temir-tikinti">Təmir və tikinti</option>
              <option value="elanlar/ev-ve-bag-ucun/mebel">Mebellər</option>
              <option value="elanlar/ev-ve-bag-ucun/meiset-texnikasi">Məişət texnikası</option>
              <option value="elanlar/ev-ve-bag-ucun/qab-qacaq">Qab-qacaq və mətbəx ləvazimatları</option>
              <option value="elanlar/ev-ve-bag-ucun/erzaq">Ərzaq</option>
              <option value="elanlar/ev-ve-bag-ucun/bitkiler">Bitkilər</option>
              <option value="elanlar/ev-ve-bag-ucun/xalcalar-aksesuarlar">Xalçalar və aksesuarlar</option>
              <option value="elanlar/ev-ve-bag-ucun/ev-tekstili">Ev tekstili</option>
              <option value="elanlar/ev-ve-bag-ucun/ev-bag-ucun-ishiqlandirma">Ev və bağ üçün işiqlandırma</option>
              <option value="elanlar/ev-ve-bag-ucun/dekor-interyer">Dekor və interyer</option>
              <option value="elanlar/ev-ve-bag-ucun/bag-bostan">Bağ və bostan</option>
            </optgroup>
            <optgroup label="Elektronika">
              <option value="elanlar/elektronika/audio-video">Audio və video</option>
              <option value="elanlar/elektronika/komputer-aksesuarlari">Kompüter aksesuarları</option>
              <option value="elanlar/elektronika/oyunlar-ve-programlar">Oyunlar, pultlar və proqramlar</option>
              <option value="elanlar/elektronika/komputerler">Masaüstü kompüterlər</option>
              <option value="elanlar/elektronika/komputer-avadanliqi">Komponentlər və monitorlar</option>
              <option value="elanlar/elektronika/plansetler">Planşet və elektron kitablar</option>
              <option value="elanlar/elektronika/noutbuklar">Noutbuklar və Netbuklar</option>
              <option value="elanlar/elektronika/ofis-avadanliqi">Ofis avadanlığı və istehlak</option>
              <option value="elanlar/elektronika/telefonlar">Telefonlar</option>
              <option value="elanlar/elektronika/nomreler-ve-sim-kartlar">Nömrələr və SİM-kartlar</option>
              <option value="elanlar/elektronika/fotoaparatlar-ve-linzalar">Foto texnika</option>
              <option value="elanlar/elektronika/smart-saat-ve-qolbaqlar">Smart saat və qolbaqlar</option>
              <option value="elanlar/elektronika/televizor-ve-aksesuarlar">Televizorlar və aksesuarlar</option>
            </optgroup>
            <optgroup label="Hobbi və asudə">
              <option value="elanlar/hobbi-ve-asude/turlar-ve-biletler">Biletlər və səyahət</option>
              <option value="elanlar/hobbi-ve-asude/velosipedler">Velosipedlər</option>
              <option value="elanlar/hobbi-ve-asude/kolleksiya">Kolleksiya</option>
              <option value="elanlar/hobbi-ve-asude/musiqi-aletleri">Musiqi alətləri</option>
              <option value="elanlar/hobbi-ve-asude/idman-ve-asude">İdman və asudə</option>
              <option value="elanlar/hobbi-ve-asude/kitab-ve-jurnallar">Kitab və jurnallar</option>
              <option value="elanlar/hobbi-ve-asude/ovculuq-baliqciliq">Ovçuluq və balıqçılıq</option>
              <option value="elanlar/hobbi-ve-asude/tanisliq">Tanışlıq</option>
            </optgroup>
            <optgroup label="Nəqliyyat">
              <option value="elanlar/neqliyyat/avtomobiller">Avtomobillər</option>
              <option value="elanlar/neqliyyat/ehtiyyat-hisseleri-ve-aksesuarlar">Ehtiyat hissələri və aksesuarlar</option>
              <option value="elanlar/neqliyyat/su-neqliyyati">Su nəqliyyatı</option>
              <option value="elanlar/neqliyyat/motosikletler-mopedler">Motosikletlər və mopedlər</option>
              <option value="elanlar/neqliyyat/avtobuslar-ve-xususi-texnika">Avtobuslar və xüsusi texnika</option>
              <option value="elanlar/neqliyyat/aqrotexnika">Aqrotexnika</option>
            </optgroup>
            <optgroup label="Daşınmaz əmlak">
              <option photos-required="3" value="elanlar/dasinmaz-emlak/menziller">
                Mənzillər
              </option>
              <option photos-required="3" value="elanlar/dasinmaz-emlak/baglar-ve-villalar">
                Villalar, bağ evləri
              </option>
              <option value="elanlar/dasinmaz-emlak/torpaq-sahesi">Torpaq</option>
              <option value="elanlar/dasinmaz-emlak/qarajlar">Qarajlar</option>
              <option value="elanlar/dasinmaz-emlak/xaricde-emlak">Xaricdə əmlak</option>
              <option photos-required="3" value="elanlar/dasinmaz-emlak/obyektler-ve-ofisler">
                Obyektlər və ofislər
              </option>
            </optgroup>
            <optgroup label="İş elanları">
              <option value="elanlar/is-elanlari/vakansiyalar">Vakansiyalar</option>
              <option value="elanlar/is-elanlari/is-axtariram">İş axtarıram</option>
            </optgroup>
            <optgroup label="Heyvanlar">
              <option value="elanlar/heyvanlar/itler">İtlər</option>
              <option value="elanlar/heyvanlar/pisikler">Pişiklər</option>
              <option value="elanlar/heyvanlar/quslar">Quşlar</option>
              <option value="elanlar/heyvanlar/baliqlar-akvariumlar">Akvarium və balıqlar</option>
              <option value="elanlar/heyvanlar/diger-heyvanlar">Digər heyvanlar</option>
              <option value="elanlar/heyvanlar/heyvanlar-ucun-mehsullar">Heyvanlar üçün məhsullar</option>
            </optgroup>
            <optgroup label="Xidmətlər və biznes">
              <option value="elanlar/xidmetler/avadanliqin-icaresi">Avadanlığın icarəsi</option>
              <option value="elanlar/xidmetler/avadanliqin-qurasdirilmasi">Avadanlıqların quraşdırılması</option>
              <option value="elanlar/xidmetler/biznes-avadaliqi">Biznes üçün avadanlıq</option>
              <option value="elanlar/xidmetler/avtoservis-ve-diaqnostika">Avtoservis və diaqnostika </option>
              <option value="elanlar/xidmetler/dayeler-baxicilar">Dayələr, baxıcılar</option>
              <option value="elanlar/xidmetler/foto-ve-video-cekilis">Foto və video çəkiliş xidmətləri</option>
              <option value="elanlar/xidmetler/gozellik-xidmetleri">Gözəllik, sağlamlıq</option>
              <option value="elanlar/xidmetler/huquq-xidmetleri">Hüquq xidmətləri</option>
              <option value="elanlar/xidmetler/komputer-xidmetleri">IT, internet, telekom</option>
              <option value="elanlar/xidmetler/sifarisle-mebel">Mebel yığılması və təmiri</option>
              <option value="elanlar/xidmetler/tedbirlerin-teskilati">Musiqi, əyləncə və tədbirlər</option>
              <option value="elanlar/xidmetler/muhasibat-xidmetleri">Mühasibat xidmətləri</option>
              <option value="elanlar/xidmetler/logistika-ve-neqliyyat">Nəqliyyat və logistika</option>
              <option value="elanlar/xidmetler/keyterinq-xidmetleri">Qidalanma, keyterinq</option>
              <option value="elanlar/xidmetler/reklam-xidmetleri">Reklam, dizayn və poliqrafiya</option>
              <option value="elanlar/xidmetler/sigorta-xidmetleri">Sığorta xidmətləri</option>
              <option value="elanlar/xidmetler/tehlukesizlik-sistemleri">Təhlükəsizlik sistemlərinin qurulması</option>
              <option value="elanlar/xidmetler/telim-hazirliq-kurslari">Təlim, hazırlıq kursları</option>
              <option value="elanlar/xidmetler/temir-tikinti">Təmir və tikinti</option>
              <option value="elanlar/xidmetler/temizlik-xidmeti">Təmizlik</option>
              <option value="elanlar/xidmetler/tercume-xidmetleri">Tərcümə</option>
              <option value="elanlar/xidmetler/texnika-temiri">Texnika təmiri</option>
              <option value="elanlar/xidmetler/tibbi-xidmetler">Tibbi xidmətlər</option>
              <option value="elanlar/xidmetler/diger-xidmetler">Digər</option>
            </optgroup>
          </select>
        </FormGroup>
        {categoryName === "ev-ve-bag-ucun" ? (
          <FormGroup>
            <Label for="exampleSelect">Malin novu</Label>
            <select
              data-id="758"
              data-initial-load="true"
              data-with-options="true"
              className="select optional form-control"
              name="lot[property_set][758]"
              id="lot_property_set_758"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">Siyahıdan seçin</option>
              <option value="34863">Badələr və qədəhlər</option>
              <option value="3899">Boşqablar</option>
              <option value="34861">Çay və qəhvə servizləri</option>
              <option value="34912">Çaydanlar və qəhvədanlar</option>
              <option value="34866">Fincanlar</option>
              <option value="34908">Kasalar və salat qabları</option>
              <option value="34869">Konfet, qənd və mürəbbə qabları</option>
              <option value="34906">Külqabılar</option>
              <option value="34864">Meyvə qabları</option>
              <option value="3900">Mətbəx məhsulları</option>
              <option value="34862">Nahar servizləri</option>
              <option value="34868">Nəlbəkilər</option>
              <option value="34911">Qazanlar və tavalar</option>
              <option value="34865">Qrafinlər və dolçalar</option>
              <option value="34913">Sinilər və altlıqlar</option>
              <option value="34870">Şirniyyat və çərəz qabları</option>
              <option value="34907">Şorba qabları</option>
              <option value="34867">Stəkanlar</option>
              <option value="34871">Süfrə ləvazimatları</option>
            </select>
          </FormGroup>
        ) : null}

        {/* -------------------------Sexsi esyalar checkbox---------------------------- */}
        {categoryName === "sexsi-esyalar" ? (
          <FormGroup>
            <Label for="exampleSelect">Cinsiyyet</Label>
            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Secin</option>
              <option value="kisi">Kisi</option>
              <option value="qadin">Qadin</option>
            </select>
          </FormGroup>
        ) : null}
        {/* -------------------------Sexsi esyalar checkbox---------------------------- */}

        {/* -------------------------IsNew and Deliveryt checkbox---------------------------- */}
        {categoryName === "usaqlar-ucun" ? (
          <FormGroup>
            <Input type="checkbox" name="new" id="new" value={isNew} onChange={(e) => setIsNew(e.target.value)} />
            <Label for="exampleSelect"> Yeni?</Label>
            <Input type="checkbox" name="new" id="new" value={delivery} onChange={(e) => setDelivery(e.target.value)} />
            <Label for="exampleSelect"> Catdirilma?</Label>
          </FormGroup>
        ) : null}
        {/* -------------------------IsNew and Deliveryt checkbox---------------------------- */}

        <FormGroup>
          <Label for="exampleSelect">Elanin adi</Label>
          <Input type="text" name="title" placeholder="Elanın adı" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Şəhər</Label>
          <select className="form-control" id="exampleSelect" name="city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Şəhər seçin</option>
            <option value="Bakı">Bakı</option>
            <option value="Gəncə">Gəncə</option>
            <option value="Sumqayit">Sumqayit</option>
            <option value="Lənkəran">Lənkəran</option>
            <option value="Zaqatala">Zaqatala</option>
            <option value="Xaçmaz">Xaçmaz</option>
            <option value="Xankəndi">Xankəndi</option>
            <option value="Xızı">Xızı</option>
            <option value="Xocalı">Xocalı</option>
            <option value="Xocavənd">Xocavənd</option>
          </select>
        </FormGroup>
        <FormGroup>
          <Label> Qiymet</Label>
          <Input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}></Input>
        </FormGroup>
        <FormGroup>
          <input type="file" value={img} onChange={(e) => setImg(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="exampleSelect">Adiniz *</label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="exampleSelect">E-mail *</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="exampleSelect">Telefon *</label>
          <Input type="text" placeholder="(000) 000-00-00" value={phoneNumb} onChange={(e) => setPhoneNumb(e.target.value)} />
        </FormGroup>
        <Button color="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
