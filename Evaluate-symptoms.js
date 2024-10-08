// ฟังก์ชันสำหรับอัปเดตค่า slider และเปลี่ยนสีตามระดับ
function updateValue(slider, outputId) {
  const value = slider.value;
  const outputElement = document.getElementById(outputId);
  outputElement.textContent = value;
  outputElement.style.color = getTextColor(value);  // เปลี่ยนสีตัวเลข

  // ตรวจสอบว่า slider อย่างน้อยหนึ่งตัวมีค่า > 0
  checkSubmitButton();
}

// ฟังก์ชันตรวจสอบปุ่ม Submit
function checkSubmitButton() {
  const sliders = [document.getElementById('headache').value,
                   document.getElementById('nausea').value,
                   document.getElementById('injury').value,
                   document.getElementById('cough').value,
                   document.getElementById('runnyNose').value,
                   document.getElementById('bodyAche').value];

  const isAnySliderSelected = sliders.some(value => value > 0);
  document.getElementById('submitBtn').disabled = !isAnySliderSelected;
}

// ฟังก์ชันสำหรับประมวลผลข้อมูลที่ผู้ใช้เลือกและแสดงผลใน modal
function submitQuiz() {
  const headache = document.getElementById('headache').value;
  const nausea = document.getElementById('nausea').value;
  const injury = document.getElementById('injury').value;
  const cough = document.getElementById('cough').value;
  const runnyNose = document.getElementById('runnyNose').value;
  const bodyAche = document.getElementById('bodyAche').value;

  const modalContent = `
    <p style="color: ${getTextColor(headache)}">ปวดหัว: ${headache}/10</p>
    <p style="color: ${getTextColor(nausea)}">คลื่นไส้: ${nausea}/10</p>
    <p style="color: ${getTextColor(injury)}">อาการบาดเจ็บ: ${injury}/10</p>
    <p style="color: ${getTextColor(cough)}">ไอ: ${cough}/10</p>
    <p style="color: ${getTextColor(runnyNose)}">น้ำมูกไหล: ${runnyNose}/10</p>
    <p style="color: ${getTextColor(bodyAche)}">ปวดร่างกาย: ${bodyAche}/10</p>
  `;

  document.getElementById('modalResult').innerHTML = modalContent;

  // เปิด modal
  openModal();
}

// ฟังก์ชันสำหรับเปิด modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// ฟังก์ชันสำหรับปิด modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// ฟังก์ชันเพื่อกำหนดสีข้อความตามระดับ
function getTextColor(value) {
  if (value >= 0 && value <= 2) {
    return 'White'; // สีเทาเมื่อป่วยปกติ
  } else if (value >= 3 && value <= 4) {
    return '#008000'; // สีเขียวเมื่อป่วยเล็กน้อย
  } else if (value >= 5 && value <= 6) {
    return '#FFD700'; // สีเหลืองเมื่อป่วยหนักขึ้น
  } else if (value >= 7 && value <= 8) {
    return '#FF69B4'; // สีชมพูเมื่อมีความเสี่ยงสูง
  } else if (value >= 9 && value <= 10) {
    return '#FF0000'; // สีแดงเมื่อมีความเสี่ยงต่อชีวิต
  }
}