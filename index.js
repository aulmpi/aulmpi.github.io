const TEXTS = [
  `Hi, mpii gimana hari ini? happy ga?
  aku harap kamu selalu bahagia dimanapun dan kapanpun.`,

  `mpi makasih ya udah mau aku repotin ini itu aku selalu nyusahin kamu dalam hal apapun,
  apalagi sekarang setiap menit aku kesakitan setiap menit aku bawel ke kamu ngeluh sakit,
  maafin aku mpi aku sayang bgt sama kamu lebih dari apapun di diri aku.`,

  `mpi sayang,
  kalo masih banyak hal yang harus aku korbanin lagi buat kamu,
  aku bakal lakuin lagi,
  walaupun nyawa aku harus ilang sekalipun aku bahagia kalo itu buat kamu,
  aku cinta banget sama kamu`,

  `When you are young, they assume you know nothin' but i knew you...`,

  `albar maaf ya aku belum cukup buat kamu,
  aku selalu merasa ga pantes buat kamu,
  maaf aku ga cantik maafin aku ya,
  aku selalu berusaha buat jadi lebih dibanding diri aku sebelumnya aku selalu berusaha setiap hari buat bikin kamu sayang sama aku.`,

  `Come sink into me and let me breathe you in
  I'll be your gravity, you be my oxygen
  So dig two graves 'cause when you die
  I swear I'll be leaving by your side`,

  `aku selalu seneng bisa korbanin apapun buat kamu aku selalu merasa bahagia di atas rasa sakit yg aku rasain ini,
it's better than u leave me sayang.`,
];
let text_index = 0;
let text_char_index = 0;

let carousel_index = 0;

function carousel() {
  const slides = document.getElementsByClassName("slides");
  for (const slide of slides) {
    slide.style.display = "none";
  }

  if (carousel_index >= slides.length) {
    carousel_index = 0;
  }
  slides[carousel_index++].style.display = "block";

  setTimeout(carousel, 2000);
}

function typeText(delay) {
  const p_text = document.querySelector("p.text");

  if (text_index >= TEXTS.length) {
    return;
  }

  const text = TEXTS[text_index];
  p_text.textContent += text.charAt(text_char_index);

  if (text_char_index++ < text.length) {
    setTimeout(() => {
      let calculated_delay = 50;

      if (text_char_index === text.length - 1) {
        calculated_delay = 2000;
      } else if (text_char_index < text.length) {
        const next_char = text[text_char_index].toLowerCase();
        const ok_chars = [" ", "'"];

        if (next_char == ",") {
          calculated_delay = 200;
        } else if (
          !ok_chars.includes(next_char) &&
          !(next_char >= "a" && next_char <= "z")
        ) {
          calculated_delay = 750;
        }
      }

      typeText(calculated_delay);
    }, delay);
    //
  } else {
    text_index += 1;
    text_char_index = 0;

    if (text_index !== TEXTS.length) {
      p_text.textContent = "";
      setTimeout(() => typeText(delay), delay);
    }
  }
}

carousel();
typeText();
