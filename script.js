// สร้าง array เก็บข้อมูลของผู้ประกอบการ
const businesses = [
  {
    name: "Business A",
    expertise: ["Management", "Finance", "Sales"],
    request: ["Language"],
  },
  {
    name: "Business B",
    expertise: ["Technology", "Marketing", "Consulting"],
    request: ["Marketing"],
  },
  {
    name: "Business C",
    expertise: ["Technology", "Management", "Consulting"],
    request: ["Design"],
  },
  {
    name: "Business D",
    expertise: ["Marketing", "Finance", "Sales"],
    request: ["Finance"],
  },
  // เพิ่มข้อมูลของผู้ประกอบการเพิ่มเติมตามต้องการ
];

// สร้าง array เก็บข้อมูลของนักศึกษาฝึกงาน
const interns = [
  {
    name: "Intern 1",
    skills: ["Design"],
  },
  {
    name: "Intern 2",
    skills: ["Technology", "Language"],
  },
  {
    name: "Intern 3",
    skills: ["Marketing"],
  },
  {
    name: "Intern 4",
    skills: ["Finance"],
  },
  // เพิ่มข้อมูลของนักศึกษาฝึกงานเพิ่มเติมตามต้องการ
];

// ฟังก์ชันสำหรับการจับคู่
function matchPairs() {
  let matchesHTML = "";

  // วนลูปผู้ประกอบการ
  for (const business of businesses) {
    let bestMatch = { intern: null, score: 0 };

    // วนลูปนักศึกษาฝึกงาน
    for (const intern of interns) {
      // ตรวจสอบว่านักศึกษาฝึกงานมีทักษะที่ผู้ประกอบการต้องการหรือไม่
      if (intern.skills.some((skill) => business.request.includes(skill))) {
        // ทำการจับคู่และคำนวณคะแนนความเข้ากัน
        const score = calculateMatchScore(business.expertise, intern.skills);
        // เช็คคะแนนความเข้ากัน
        if (score > bestMatch.score) {
          bestMatch = { intern: intern, score: score };
        }
      }
    }

    // แสดงผลลัพธ์
    if (bestMatch.intern !== null) {
      matchesHTML += `<p>${business.name} matched with ${bestMatch.intern.name} (Score: ${bestMatch.score})</p>`;
    } else {
      matchesHTML += `<p>No suitable interns found for ${business.name}</p>`;
    }
  }
}
