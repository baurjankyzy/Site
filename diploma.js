const isButton = document.getElementById('is-button');
const mathButton = document.getElementById('math-button');
const vtipoButton = document.getElementById('vtipo-button');

const mathSubjects = document.querySelector('.subjects-math');
const isSubjects = document.querySelector('.subjects-is');
const vtipoSubjects = document.querySelector('.subjects-vtipo');

isButton.addEventListener('click', () => {
  isSubjects.style.display = 'block';
  mathSubjects.style.display = 'none';
  vtipoSubjects.style.display = 'none';
});

mathButton.addEventListener('click', () => {
  mathSubjects.style.display = 'block';
  isSubjects.style.display = 'none';
  vtipoSubjects.style.display = 'none';
});

vtipoButton.addEventListener('click', () => {
  vtipoSubjects.style.display = 'block';
  mathSubjects.style.display = 'none';
  isSubjects.style.display = 'none';
});

window.addEventListener('load', () => {
  console.log('KUNDYDYDYDYDY');
  mathSubjects.style.display = 'none';
  isSubjects.style.display = 'none';
  vtipoSubjects.style.display = 'none';

});

// Получаем все кнопки c-button
const cButtons = document.querySelectorAll('.c-button');

// Добавляем обработчик событий click на каждую кнопку c-button
cButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Удаляем класс "selected" у всех кнопок внутри этого же родительского элемента
    const parent = button.parentElement;
    const buttonsInParent = parent.querySelectorAll('.c-button');
    buttonsInParent.forEach(button => button.classList.remove('selected'));

    // Добавляем класс "selected" к выбранной кнопке
    button.classList.add('selected');
  });
});

function setGrade(subject, grade) {
  if (subject === "math_physics") {
    document.getElementById("math_physics_Grade").value = grade;
  } else if (subject === "math_linear_algebra") {
    document.getElementById("math_linear_algebra_Grade").value = grade;
  } else if (subject === "math_analytic_geometry") {
    document.getElementById("math_analytic_geometry_Grade").value = grade;
  } else if (subject === "math_math_analysis_1") {
    document.getElementById("math_math_analysis_1_Grade").value = grade;
  } else if (subject === "math_math_analysis_2") {
    document.getElementById("math_math_analysis_2_Grade").value = grade;
  } else if (subject === "math_math_analysis_3") {
    document.getElementById("math_math_analysis_3_Grade").value = grade;
  } else if (subject === "math_math_analysis_4") {
    document.getElementById("math_math_analysis_4_Grade").value = grade;
  } else if (subject === "math_intro_math") {
    document.getElementById("math_intro_math_Grade").value = grade;
  } else if (subject === "math_eng_1") {
    document.getElementById("math_eng_1_Grade").value = grade;
  } else if (subject === "math_eng_2") {
    document.getElementById("math_eng_2_Grade").value = grade;
  } else if (subject === "math_tur_1") {
    document.getElementById("math_tur_1_Grade").value = grade;
  } else if (subject === "math_tur_2") {
    document.getElementById("math_tur_2_Grade").value = grade;
  } else if (subject === "math_history") {
    document.getElementById("math_history_Grade").value = grade;
  } else if (subject === "math_ict") {
    document.getElementById("math_ict_Grade").value = grade;
  } else if (subject === "math_algebra") {
    document.getElementById("math_algebra_Grade").value = grade;
  } else if (subject === "math_add") {
    document.getElementById("math_add_Grade").value = grade;
  } else if (subject === "math_edu_practice") {
    document.getElementById("math_edu_practice_Grade").value = grade;
  } else if (subject === "math_programming") {
    document.getElementById("math_programming_Grade").value = grade;
  } else if (subject === "math_discrete") {
    document.getElementById("math_discrete_Grade").value = grade;
  } else if (subject === "math_abstract") {
    document.getElementById("math_abstract_Grade").value = grade;
  } else if (subject === "math_ode") {
    document.getElementById("math_ode_Grade").value = grade;
  } else if (subject === "math_prof_ofl") {
    document.getElementById("math_prof_ofl_Grade").value = grade;
  } else if (subject === "math_philosophy") {
    document.getElementById("math_philosophy_Grade").value = grade;



  } else if (subject === "is_fundamental_programming") {
    document.getElementById("is_fundamental_programming_Grade").value = grade;
  } else if (subject === "is_physics") {
    document.getElementById("is_physics_Grade").value = grade;
  } else if (subject === "is_linear_algebra") {
    document.getElementById("is_linear_algebra_Grade").value = grade;
  } else if (subject === "is_mfcs1") {
    document.getElementById("is_mfcs1_Grade").value = grade;
  } else if (subject === "is_mfcs2") {
    document.getElementById("is_mfcs2_Grade").value = grade;
  } else if (subject === "is_en1") {
    document.getElementById("is_en1_Grade").value = grade;
  } else if (subject === "is_en2") {
    document.getElementById("is_en2_Grade").value = grade;
  } else if (subject === "is_tur1") {
    document.getElementById("is_tur1_Grade").value = grade;
  } else if (subject === "is_tur2") {
    document.getElementById("is_tur2_Grade").value = grade;
  } else if (subject === "is_programming_tech_edu_practice") {
    document.getElementById("is_programming_tech_edu_practice_Grade").value = grade;
  } else if (subject === "is_ict_cs") {
    document.getElementById("is_ict_cs_Grade").value = grade;
  } else if (subject === "is_discrete") {
    document.getElementById("is_discrete_Grade").value = grade;
  } else if (subject === "is_intro_algo") {
    document.getElementById("is_intro_algo_Grade").value = grade;
  } else if (subject === "is_database1") {
    document.getElementById("is_database1_Grade").value = grade;
  } else if (subject === "is_database2") {
    document.getElementById("is_database2_Grade").value = grade;
  } else if (subject === "is_front") {
    document.getElementById("is_front_Grade").value = grade;
  } else if (subject === "is_back") {
    document.getElementById("is_back_Grade").value = grade;
  } else if (subject === "is_philosophy") {
    document.getElementById("is_philosophy_Grade").value = grade;
  } else if (subject === "is_advanced_algo") {
    document.getElementById("is_advanced_algo_Grade").value = grade;
  } else if (subject === "is_history") {
    document.getElementById("is_history_Grade").value = grade;




  } else if (subject === "vtipo_physics") {
    document.getElementById("vtipo_physics_Grade").value = grade;
  } else if (subject === "vtipo_linear_algebra") {
    document.getElementById("vtipo_linear_algebra_Grade").value = grade;
  } else if (subject === "vtipo_programming_tech") {
    document.getElementById("vtipo_programming_tech_Grade").value = grade;
  } else if (subject === "vtipo_math_an_1") {
    document.getElementById("vtipo_math_an_1_Grade").value = grade;
  } else if (subject === "vtipo_math_an_2") {
    document.getElementById("vtipo_math_an_2_Grade").value = grade;
  } else if (subject === "vtipo_mobile_programming") {
    document.getElementById("vtipo_mobile_programming_Grade").value = grade;
  } else if (subject === "vtipo_intro_to_algo") {
    document.getElementById("vtipo_intro_to_algo_Grade").value = grade;
  } else if (subject === "vtipo_web_programming_fundamental") {
    document.getElementById("vtipo_web_programming_fundamental_Grade").value = grade;
  } else if (subject === "vtipo_en") {
    document.getElementById("vtipo_en_Grade").value = grade;
  } else if (subject === "vtipo_3d") {
    document.getElementById("vtipo_3d_Grade").value = grade;
  } else if (subject === "vtipo_turkish") {
    document.getElementById("vtipo_turkish_Grade").value = grade;
  } else if (subject === "vtipo_electronic") {
    document.getElementById("vtipo_electronic_Grade").value = grade;
  } else if (subject === "vtipo_history") {
    document.getElementById("vtipo_history_Grade").value = grade;
  } else if (subject === "vtipo_ict") {
    document.getElementById("vtipo_ict_Grade").value = grade;
  } else if (subject === "vtipo_comp_networks1") {
    document.getElementById("vtipo_comp_networks1_Grade").value = grade;
  } else if (subject === "vtipo_probability_and_math_statistics") {
    document.getElementById("vtipo_probability_and_math_statistics_Grade").value = grade;
  } else if (subject === "vtipo_edu_practice") {
    document.getElementById("vtipo_edu_practice_Grade").value = grade;
  } else if (subject === "vtipo_database") {
    document.getElementById("vtipo_database_Grade").value = grade;
  } else if (subject === "vtipo_advanced_algo") {
    document.getElementById("vtipo_advanced_algo_Grade").value = grade;
  } else if (subject === "vtipo_digital_design") {
    document.getElementById("vtipo_digital_design_Grade").value = grade;
  } else if (subject === "vtipo_prof_oriented_foreign_lan") {
    document.getElementById("vtipo_prof_oriented_foreign_lan_Grade").value = grade;
  } else if (subject === "vtipo_philosophy") {
    document.getElementById("vtipo_philosophy_Grade").value = grade;
    }
}

function calculate_vtipo(){
    var vtipo_physics_Grade = parseInt(document.getElementById("vtipo_physics_Grade").value);
    var vtipo_linear_algebra_Grade = parseInt(document.getElementById("vtipo_linear_algebra_Grade").value);
    var vtipo_programming_tech_Grade = parseInt(document.getElementById("vtipo_programming_tech_Grade").value);
    var vtipo_math_an_1_Grade = parseInt(document.getElementById("vtipo_math_an_1_Grade").value);
    var vtipo_math_an_2_Grade = parseInt(document.getElementById("vtipo_math_an_2_Grade").value);
    var vtipo_mobile_programming_Grade = parseInt(document.getElementById("vtipo_mobile_programming_Grade").value);
    var vtipo_intro_to_algo_Grade = parseInt(document.getElementById("vtipo_intro_to_algo_Grade").value);
    var vtipo_web_programming_fundamental_Grade = parseInt(document.getElementById("vtipo_web_programming_fundamental_Grade").value);
    var vtipo_en_Grade = parseInt(document.getElementById("vtipo_en_Grade").value);
    var vtipo_3d_Grade = parseInt(document.getElementById("vtipo_3d_Grade").value);
    var vtipo_turkish_Grade = parseInt(document.getElementById("vtipo_turkish_Grade").value);
    var vtipo_electronic_Grade = parseInt(document.getElementById("vtipo_electronic_Grade").value);
    var vtipo_history_Grade = parseInt(document.getElementById("vtipo_history_Grade").value);
    var vtipo_ict_Grade = parseInt(document.getElementById("vtipo_ict_Grade").value);
    var vtipo_comp_networks1_Grade = parseInt(document.getElementById("vtipo_comp_networks1_Grade").value);
    var vtipo_probability_and_math_statistics_Grade = parseInt(document.getElementById("vtipo_probability_and_math_statistics_Grade").value);
    var vtipo_edu_practice_Grade = parseInt(document.getElementById("vtipo_edu_practice_Grade").value);
    var vtipo_database_Grade = parseInt(document.getElementById("vtipo_database_Grade").value);
    var vtipo_advanced_algo_Grade = parseInt(document.getElementById("vtipo_advanced_algo_Grade").value);
    var vtipo_digital_design_Grade = parseInt(document.getElementById("vtipo_digital_design_Grade").value);
    var vtipo_prof_oriented_foreign_lan_Grade = parseInt(document.getElementById("vtipo_prof_oriented_foreign_lan_Grade").value);
    var vtipo_philosophy_Grade = parseInt(document.getElementById("vtipo_philosophy_Grade").value);

    var average_vtipo = (1.9924 * (vtipo_physics_Grade === 1 ? 1 :
            vtipo_physics_Grade === 2 ? 2 :
            vtipo_physics_Grade === 3 ? 3 :
            vtipo_physics_Grade === 4 ? 4 :
            vtipo_physics_Grade === 5 ? 5 : 0) + 0.2135 + 2.4961 *
            (vtipo_linear_algebra_Grade === 1 ? 1 :
            vtipo_linear_algebra_Grade === 2 ? 2 :
            vtipo_linear_algebra_Grade === 3 ? 3 :
            vtipo_linear_algebra_Grade === 4 ? 4 :
            vtipo_linear_algebra_Grade === 5 ? 5 : 0) + 0.0561 + 2.4427 *
            (vtipo_programming_tech_Grade === 1 ? 1 :
            vtipo_programming_tech_Grade === 2 ? 2 :
            vtipo_programming_tech_Grade === 3 ? 3 :
            vtipo_programming_tech_Grade === 4 ? 4 :
            vtipo_programming_tech_Grade === 5 ? 5 : 0) + 0.0751 + 1.8801 *
            (vtipo_math_an_1_Grade === 1 ? 1 :
            vtipo_math_an_1_Grade === 2 ? 2 :
            vtipo_math_an_1_Grade === 3 ? 3 :
            vtipo_math_an_1_Grade === 4 ? 4 :
            vtipo_math_an_1_Grade === 5 ? 5 : 0) + 0.2484 + 2.271 *
            (vtipo_math_an_2_Grade === 1 ? 1 :
            vtipo_math_an_2_Grade === 2 ? 2 :
            vtipo_math_an_2_Grade === 3 ? 3 :
            vtipo_math_an_2_Grade === 4 ? 4 :
            vtipo_math_an_2_Grade === 5 ? 5 : 0) + 0.1354 + 2.4625 *
            (vtipo_mobile_programming_Grade === 1 ? 1 :
            vtipo_mobile_programming_Grade === 2 ? 2 :
            vtipo_mobile_programming_Grade === 3 ? 3 :
            vtipo_mobile_programming_Grade === 4 ? 4 :
            vtipo_mobile_programming_Grade === 5 ? 5 : 0) + 0.0655 + 1.9908 *
            (vtipo_intro_to_algo_Grade === 1 ? 1 :
            vtipo_intro_to_algo_Grade === 2 ? 2 :
            vtipo_intro_to_algo_Grade === 3 ? 3 :
            vtipo_intro_to_algo_Grade === 4 ? 4 :
            vtipo_intro_to_algo_Grade === 5 ? 5 : 0) + 0.1893 + 2.53 *
            (vtipo_web_programming_fundamental_Grade === 1 ? 1 :
            vtipo_web_programming_fundamental_Grade === 2 ? 2 :
            vtipo_web_programming_fundamental_Grade === 3 ? 3 :
            vtipo_web_programming_fundamental_Grade === 4 ? 4 :
            vtipo_web_programming_fundamental_Grade === 5 ? 5 : 0) + 0.0434 + 0.3274 *
            (vtipo_en_Grade === 1 ? 1 :
            vtipo_en_Grade === 2 ? 2 :
            vtipo_en_Grade === 3 ? 3 :
            vtipo_en_Grade === 4 ? 4 :
            vtipo_en_Grade === 5 ? 5 : 0) + 0.5683 + 2.3389 *
            (vtipo_3d_Grade === 1 ? 1 :
            vtipo_3d_Grade === 2 ? 2 :
            vtipo_3d_Grade === 3 ? 3 :
            vtipo_3d_Grade === 4 ? 4 :
            vtipo_3d_Grade === 5 ? 5 : 0) + 0.0947 + 2.5011 *
            (vtipo_turkish_Grade === 1 ? 1 :
            vtipo_turkish_Grade === 2 ? 2 :
            vtipo_turkish_Grade === 3 ? 3 :
            vtipo_turkish_Grade === 4 ? 4 :
            vtipo_turkish_Grade === 5 ? 5 : 0) + 0.0456 + 2.2265 *
            (vtipo_electronic_Grade === 1 ? 1 :
            vtipo_electronic_Grade === 2 ? 2 :
            vtipo_electronic_Grade === 3 ? 3 :
            vtipo_electronic_Grade === 4 ? 4 :
            vtipo_electronic_Grade === 5 ? 5 : 0) + 0.168 + 2.3343 *
            (vtipo_history_Grade === 1 ? 1 :
            vtipo_history_Grade === 2 ? 2 :
            vtipo_history_Grade === 3 ? 3 :
            vtipo_history_Grade === 4 ? 4 :
            vtipo_history_Grade === 5 ? 5 : 0) + 0.086 + 2.5 *
            (vtipo_ict_Grade === 1 ? 1 :
            vtipo_ict_Grade === 2 ? 2 :
            vtipo_ict_Grade === 3 ? 3 :
            vtipo_ict_Grade === 4 ? 4 :
            vtipo_ict_Grade === 5 ? 5 : 0) + 0.0517 + 2.9303 *
            (vtipo_comp_networks1_Grade === 1 ? 1 :
            vtipo_comp_networks1_Grade === 2 ? 2 :
            vtipo_comp_networks1_Grade === 3 ? 3 :
            vtipo_comp_networks1_Grade === 4 ? 4 :
            vtipo_comp_networks1_Grade === 5 ? 5 : 0) - 0.0807 + 2.7531 *
            (vtipo_probability_and_math_statistics_Grade === 1 ? 1 :
            vtipo_probability_and_math_statistics_Grade === 2 ? 2 :
            vtipo_probability_and_math_statistics_Grade === 3 ? 3 :
            vtipo_probability_and_math_statistics_Grade === 4 ? 4 :
            vtipo_probability_and_math_statistics_Grade === 5 ? 5 : 0) - 0.0249 + 2.227 *
            (vtipo_edu_practice_Grade === 1 ? 1 :
            vtipo_edu_practice_Grade === 2 ? 2 :
            vtipo_edu_practice_Grade === 3 ? 3 :
            vtipo_edu_practice_Grade === 4 ? 4 :
            vtipo_edu_practice_Grade === 5 ? 5 : 0) - 0.1034 + 2.3286 *
            (vtipo_database_Grade === 1 ? 1 :
            vtipo_database_Grade === 2 ? 2 :
            vtipo_database_Grade === 3 ? 3 :
            vtipo_database_Grade === 4 ? 4 :
            vtipo_database_Grade === 5 ? 5 : 0) + 0.1046 + 2.9178 *
            (vtipo_advanced_algo_Grade === 1 ? 1 :
            vtipo_advanced_algo_Grade === 2 ? 2 :
            vtipo_advanced_algo_Grade === 3 ? 3 :
            vtipo_advanced_algo_Grade === 4 ? 4 :
            vtipo_advanced_algo_Grade === 5 ? 5 : 0) - 0.0675 + 2.6185 *
            (vtipo_digital_design_Grade === 1 ? 1 :
            vtipo_digital_design_Grade === 2 ? 2 :
            vtipo_digital_design_Grade === 3 ? 3 :
            vtipo_digital_design_Grade === 4 ? 4 :
            vtipo_digital_design_Grade === 5 ? 5 : 0) + 0.022 + 1.7728 *
            (vtipo_prof_oriented_foreign_lan_Grade === 1 ? 1 :
            vtipo_prof_oriented_foreign_lan_Grade === 2 ? 2 :
            vtipo_prof_oriented_foreign_lan_Grade === 3 ? 3 :
            vtipo_prof_oriented_foreign_lan_Grade === 4 ? 4 :
            vtipo_prof_oriented_foreign_lan_Grade === 5 ? 5 : 0) + 0.213 + 2.1467 *
            (vtipo_philosophy_Grade === 1 ? 1 :
            vtipo_philosophy_Grade === 2 ? 2 :
            vtipo_philosophy_Grade === 3 ? 3 :
            vtipo_philosophy_Grade === 4 ? 4 :
            vtipo_philosophy_Grade === 5 ? 5 : 0) + 0.1333)/22;

    if(average_vtipo >= 1 && average_vtipo <=3){
            document.getElementById("salary_vtipo").innerHTML = "Ваша примерная заработная плата составляет до 199тыс тенге. Результат основан на данных выпускников этих специальностей.";
    }
    if(average_vtipo >3 && average_vtipo <=5){
            document.getElementById("salary_vtipo").innerHTML = "Ваша примерная заработная плата составляет от 200тыс до 399тыс тенге. Результат основан на данных выпускников этих специальностей.";
    }
    if(average_vtipo >5  && average_vtipo <=7){
            document.getElementById("salary_vtipo").innerHTML = "Ваша примерная заработная плата составляет от 400тыс до 599тыс тенге. Результат основан на данных выпускников этих специальностей.";
    }
    if(average_vtipo > 7 && average_vtipo <=9){
            document.getElementById("salary_vtipo").innerHTML = "Ваша примерная заработная плата составляет от 600тыс до 799тыс тенге. Результат основан на данных выпускников этих специальностей.";
    }
    if(average_vtipo > 9){
            document.getElementById("salary_vtipo").innerHTML = "Ваша примерная заработная плата составляет больше 800тыс тенге. Результат основан на данных выпускников этих специальностей.";
    }
}

function calculate_is(){
    var is_fundamental_programming_Grade = parseInt(document.getElementById("is_fundamental_programming_Grade").value);
    var is_physics_Grade = parseInt(document.getElementById("is_physics_Grade").value);
    var is_linear_algebra_Grade = parseInt(document.getElementById("is_linear_algebra_Grade").value);
    var is_mfcs1_Grade = parseInt(document.getElementById("is_mfcs1_Grade").value);
    var is_mfcs2_Grade = parseInt(document.getElementById("is_mfcs2_Grade").value);
    var is_en1_Grade = parseInt(document.getElementById("is_en1_Grade").value);
    var is_en2_Grade = parseInt(document.getElementById("is_en2_Grade").value);
    var is_tur1_Grade = parseInt(document.getElementById("is_tur1_Grade").value);
    var is_tur2_Grade = parseInt(document.getElementById("is_tur2_Grade").value);
    var is_programming_tech_edu_practice_Grade = parseInt(document.getElementById("is_programming_tech_edu_practice_Grade").value);
    var is_ict_cs_Grade = parseInt(document.getElementById("is_ict_cs_Grade").value);
    var is_discrete_Grade = parseInt(document.getElementById("is_discrete_Grade").value);
    var is_intro_algo_Grade = parseInt(document.getElementById("is_intro_algo_Grade").value);
    var is_database1_Grade = parseInt(document.getElementById("is_database1_Grade").value);
    var is_database2_Grade = parseInt(document.getElementById("is_database2_Grade").value);
    var is_front_Grade = parseInt(document.getElementById("is_front_Grade").value);
    var is_back_Grade = parseInt(document.getElementById("is_back_Grade").value);
    var is_philosophy_Grade = parseInt(document.getElementById("is_philosophy_Grade").value);
    var is_advanced_algo_Grade = parseInt(document.getElementById("is_advanced_algo_Grade").value);
    var is_history_Grade = parseInt(document.getElementById("is_history_Grade").value);


    var average_is = (2.251 * (is_fundamental_programming_Grade === 1 ? 1 :
            is_fundamental_programming_Grade === 2 ? 2 :
            is_fundamental_programming_Grade === 3 ? 3 :
            is_fundamental_programming_Grade === 4 ? 4 :
            is_fundamental_programming_Grade === 5 ? 5 : 0) + 0.0972  +2.1075 *
            (is_physics_Grade === 1 ? 1 :
            is_physics_Grade === 2 ? 2 :
            is_physics_Grade === 3 ? 3 :
            is_physics_Grade === 4 ? 4 :
            is_physics_Grade === 5 ? 5 : 0) + 0.1258 + 1.5828 *
            (is_linear_algebra_Grade === 1 ? 1 :
            is_linear_algebra_Grade === 2 ? 2 :
            is_linear_algebra_Grade === 3 ? 3 :
            is_linear_algebra_Grade === 4 ? 4 :
            is_linear_algebra_Grade === 5 ? 5 : 0) + 0.3 + 1.8003 *
            (is_mfcs1_Grade === 1 ? 1 :
            is_mfcs1_Grade === 2 ? 2 :
            is_mfcs1_Grade === 3 ? 3 :
            is_mfcs1_Grade === 4 ? 4 :
            is_mfcs1_Grade === 5 ? 5 : 0) + 0.2508 + 1.806 *
            (is_mfcs2_Grade === 1 ? 1 :
            is_mfcs2_Grade === 2 ? 2 :
            is_mfcs2_Grade === 3 ? 3 :
            is_mfcs2_Grade === 4 ? 4 :
            is_mfcs2_Grade === 5 ? 5 : 0) + 0.2338 + 2.1133 *
            (is_en1_Grade === 1 ? 1 :
            is_en1_Grade === 2 ? 2 :
            is_en1_Grade === 3 ? 3 :
            is_en1_Grade === 4 ? 4 :
            is_en1_Grade === 5 ? 5 : 0) + 0.122 + 1.6653 *
            (is_en2_Grade === 1 ? 1 :
            is_en2_Grade === 2 ? 2 :
            is_en2_Grade === 3 ? 3 :
            is_en2_Grade === 4 ? 4 :
            is_en2_Grade === 5 ? 5 : 0)+ 0.2196 + 0.1158 *
            (is_tur1_Grade === 1 ? 1 :
            is_tur1_Grade === 2 ? 2 :
            is_tur1_Grade === 3 ? 3 :
            is_tur1_Grade === 4 ? 4 :
            is_tur1_Grade === 5 ? 5 : 0) + 0.1158 + 2.429 *
            (is_tur2_Grade === 1 ? 1 :
            is_tur2_Grade === 2 ? 2 :
            is_tur2_Grade === 3 ? 3 :
            is_tur2_Grade === 4 ? 4 :
            is_tur2_Grade === 5 ? 5 : 0)+ 0.0421 + 1.9487 *
            (is_programming_tech_edu_practice_Grade === 1 ? 1 :
            is_programming_tech_edu_practice_Grade === 2 ? 2 :
            is_programming_tech_edu_practice_Grade === 3 ? 3 :
            is_programming_tech_edu_practice_Grade === 4 ? 4 :
            is_programming_tech_edu_practice_Grade === 5 ? 5 : 0)+ 0.1787 + 2.4139 *
            (is_ict_cs_Grade === 1 ? 1 :
            is_ict_cs_Grade === 2 ? 2 :
            is_ict_cs_Grade === 3 ? 3 :
            is_ict_cs_Grade === 4 ? 4 :
            is_ict_cs_Grade === 5 ? 5 : 0) + 0.0543 + 1.9815 *
            (is_discrete_Grade === 1 ? 1 :
            is_discrete_Grade === 2 ? 2 :
            is_discrete_Grade === 3 ? 3 :
            is_discrete_Grade === 4 ? 4 :
            is_discrete_Grade === 5 ? 5 : 0) + 0.1726 + 1.404 *
            (is_intro_algo_Grade === 1 ? 1 :
            is_intro_algo_Grade === 2 ? 2 :
            is_intro_algo_Grade === 3 ? 3 :
            is_intro_algo_Grade === 4 ? 4 :
            is_intro_algo_Grade === 5 ? 5 : 0) + 0.348 + 1.7339 *
            (is_database1_Grade === 1 ? 1 :
            is_database1_Grade === 2 ? 2 :
            is_database1_Grade === 3 ? 3 :
            is_database1_Grade === 4 ? 4 :
            is_database1_Grade === 5 ? 5 : 0)+ 0.2363 + 2.5701 *
            (is_database2_Grade === 1 ? 1 :
            is_database2_Grade === 2 ? 2 :
            is_database2_Grade === 3 ? 3 :
            is_database2_Grade === 4 ? 4 :
            is_database2_Grade === 5 ? 5 : 0) + 0.014 + 2.4878 *
            (is_front_Grade === 1 ? 1 :
            is_front_Grade === 2 ? 2 :
            is_front_Grade === 3 ? 3 :
            is_front_Grade === 4 ? 4 :
            is_front_Grade === 5 ? 5 : 0) + 0.0371 + 2 *
            (is_back_Grade === 1 ? 1 :
            is_back_Grade === 2 ? 2 :
            is_back_Grade === 3 ? 3 :
            is_back_Grade === 4 ? 4 :
            is_back_Grade === 5 ? 5 : 0) + 0.16672 - 3.2381 *
            (is_philosophy_Grade === 1 ? 1 :
            is_philosophy_Grade === 2 ? 2 :
            is_philosophy_Grade === 3 ? 3 :
            is_philosophy_Grade === 4 ? 4 :
            is_philosophy_Grade === 5 ? 5 : 0) + 0.1378 + 2.2722 *
            (is_advanced_algo_Grade === 1 ? 1 :
            is_advanced_algo_Grade === 2 ? 2 :
            is_advanced_algo_Grade === 3 ? 3 :
            is_advanced_algo_Grade === 4 ? 4 :
            is_advanced_algo_Grade === 5 ? 5 : 0) + 0.0992 + 2.5749 *
            (is_history_Grade === 1 ? 1 :
            is_history_Grade === 2 ? 2 :
            is_history_Grade === 3 ? 3 :
            is_history_Grade === 4 ? 4 :
            is_history_Grade === 5 ? 5 : 0) + 0.0098)/20;

    if(average_is >= 1 && average_is <=2){
            document.getElementById("salary_is").innerHTML = "Ваша примерная заработная плата составляет до 199тыс тенге.<br>Результат основан на данных выпускников этих специальностей.";
    }
    if(average_is >2 && average_is <=3){
            document.getElementById("salary_is").innerHTML = "Ваша примерная заработная плата составляет от 200тыс до 399тыс тенге.<br> Результат основан на данных выпускников этих специальностей.";
    }
    if(average_is >3  && average_is <=4){
            document.getElementById("salary_is").innerHTML = "Ваша примерная заработная плата составляет от 400тыс до 599тыс тенге.<br> Результат основан на данных выпускников этих специальностей.";
    }
    if(average_is > 4 && average_is <=5){
            document.getElementById("salary_is").innerHTML = "Ваша примерная заработная плата составляет от 600тыс до 799тыс тенге.<br>Результат основан на данных выпускников этих специальностей.";
    }
    if(average_is > 5){
            document.getElementById("salary_is").innerHTML = "Ваша примерная заработная плата составляет больше 800тыс тенге.<br> Результат основан на данных выпускников этих специальностей.";
    }

};

function calculate_math() {
  var math_physics_Grade = parseInt(document.getElementById("math_physics_Grade").value);
  var math_linear_algebra_Grade = parseInt(document.getElementById("math_linear_algebra_Grade").value);
  var math_analytic_geometry_Grade = parseInt(document.getElementById("math_analytic_geometry_Grade").value);
  var math_math_analysis_1_Grade = parseInt(document.getElementById("math_math_analysis_1_Grade").value);
  var math_math_analysis_2_Grade = parseInt(document.getElementById("math_math_analysis_2_Grade").value);
  var math_math_analysis_3_Grade = parseInt(document.getElementById("math_math_analysis_3_Grade").value);
  var math_math_analysis_4_Grade = parseInt(document.getElementById("math_math_analysis_4_Grade").value);
  var math_intro_math_Grade = parseInt(document.getElementById("math_intro_math_Grade").value);
  var math_eng_1_Grade = parseInt(document.getElementById("math_eng_1_Grade").value);
  var math_eng_2_Grade = parseInt(document.getElementById("math_eng_2_Grade").value);
  var math_tur_1_Grade = parseInt(document.getElementById("math_tur_1_Grade").value);
  var math_tur_2_Grade = parseInt(document.getElementById("math_tur_2_Grade").value);
  var math_history_Grade = parseInt(document.getElementById("math_history_Grade").value);
  var math_ict_Grade = parseInt(document.getElementById("math_ict_Grade").value);
  var math_algebra_Grade = parseInt(document.getElementById("math_algebra_Grade").value);
  var math_add_Grade = parseInt(document.getElementById("math_add_Grade").value);
  var math_edu_practice_Grade = parseInt(document.getElementById("math_edu_practice_Grade").value);
  var math_programming_Grade = parseInt(document.getElementById("math_programming_Grade").value);
  var math_discrete_Grade = parseInt(document.getElementById("math_discrete_Grade").value);
  var math_abstract_Grade = parseInt(document.getElementById("math_abstract_Grade").value);
  var math_ode_Grade = parseInt(document.getElementById("math_ode_Grade").value);
  var math_prof_ofl_Grade = parseInt(document.getElementById("math_prof_ofl_Grade").value);
  var math_philosophy_Grade = parseInt(document.getElementById("math_philosophy_Grade").value);

  var average_math =  (2.153 * (math_physics_Grade === 1 ? 1 :
            math_physics_Grade === 2 ? 2 :
            math_physics_Grade === 3 ? 3 :
            math_physics_Grade === 4 ? 4 :
            math_physics_Grade === 5 ? 5 : 0) + 0.1055 + 2.1608 *
            (math_linear_algebra_Grade === 1 ? 1 :
            math_linear_algebra_Grade === 2 ? 2 :
            math_linear_algebra_Grade === 3 ? 3 :
            math_linear_algebra_Grade === 4 ? 4 :
            math_linear_algebra_Grade === 5 ? 5 : 0) + 0.1215 + 2.0415 *
            (math_analytic_geometry_Grade === 1 ? 1 :
            math_analytic_geometry_Grade === 2 ? 2 :
            math_analytic_geometry_Grade === 3 ? 3 :
            math_analytic_geometry_Grade === 4 ? 4 :
            math_analytic_geometry_Grade === 5 ? 5 : 0) + 0.1215 + 1.0282 *
            (math_math_analysis_1_Grade === 1 ? 1 :
            math_math_analysis_1_Grade === 2 ? 2 :
            math_math_analysis_1_Grade === 3 ? 3 :
            math_math_analysis_1_Grade === 4 ? 4 :
            math_math_analysis_1_Grade === 5 ? 5 : 0) + 0.4798 + 1.1267 *
            (math_math_analysis_2_Grade === 1 ? 1 :
            math_math_analysis_2_Grade === 2 ? 2 :
            math_math_analysis_2_Grade === 3 ? 3 :
            math_math_analysis_2_Grade === 4 ? 4 :
            math_math_analysis_2_Grade === 5 ? 5 : 0) + 0.4253 + 1.4333 *
            (math_math_analysis_3_Grade === 1 ? 1 :
            math_math_analysis_3_Grade === 2 ? 2 :
            math_math_analysis_3_Grade === 3 ? 3 :
            math_math_analysis_3_Grade === 4 ? 4 :
            math_math_analysis_3_Grade === 5 ? 5 : 0) + 0.3167 + 0.441 *
            (math_math_analysis_4_Grade === 1 ? 1 :
            math_math_analysis_4_Grade === 2 ? 2 :
            math_math_analysis_4_Grade === 3 ? 3 :
            math_math_analysis_4_Grade === 4 ? 4 :
            math_math_analysis_4_Grade === 5 ? 5 : 0) + 0.5975 + 1.6234 *
            (math_intro_math_Grade === 1 ? 1 :
            math_intro_math_Grade === 2 ? 2 :
            math_intro_math_Grade === 3 ? 3 :
            math_intro_math_Grade === 4 ? 4 :
            math_intro_math_Grade === 5 ? 5 : 0) + 0.2779 + 0.7502 *
            (math_eng_1_Grade === 1 ? 1 :
            math_eng_1_Grade === 2 ? 2 :
            math_eng_1_Grade === 3 ? 3 :
            math_eng_1_Grade === 4 ? 4 :
            math_eng_1_Grade === 5 ? 5 : 0) + 0.4071 + 1.3571 *
            (math_eng_2_Grade === 1 ? 1 :
            math_eng_2_Grade === 2 ? 2 :
            math_eng_2_Grade === 3 ? 3 :
            math_eng_2_Grade === 4 ? 4 :
            math_eng_2_Grade === 5 ? 5 : 0) + 0.25 + 1.9571 *
            (math_tur_1_Grade === 1 ? 1 :
            math_tur_1_Grade === 2 ? 2 :
            math_tur_1_Grade === 3 ? 3 :
            math_tur_1_Grade === 4 ? 4 :
            math_tur_1_Grade === 5 ? 5 : 0) + 0.1 + 1.5178 *
            (math_tur_2_Grade === 1 ? 1 :
            math_tur_2_Grade === 2 ? 2 :
            math_tur_2_Grade === 3 ? 3 :
            math_tur_2_Grade === 4 ? 4 :
            math_tur_2_Grade === 5 ? 5 : 0) + 0.2001 + 1.6745 *
            (math_history_Grade === 1 ? 1 :
            math_history_Grade === 2 ? 2 :
            math_history_Grade === 3 ? 3 :
            math_history_Grade === 4 ? 4 :
            math_history_Grade === 5 ? 5 : 0) + 0.1642 + 1.5267 *
            (math_ict_Grade === 1 ? 1 :
            math_ict_Grade === 2 ? 2 :
            math_ict_Grade === 3 ? 3 :
            math_ict_Grade === 4 ? 4 :
            math_ict_Grade === 5 ? 5 : 0) + 0.2145 + 1.383 *
            (math_algebra_Grade === 1 ? 1 :
            math_algebra_Grade === 2 ? 2 :
            math_algebra_Grade === 3 ? 3 :
            math_algebra_Grade === 4 ? 4 :
            math_algebra_Grade === 5 ? 5 : 0) + 0.3124 + 2.401 *
            (math_add_Grade === 1 ? 1 :
            math_add_Grade === 2 ? 2 :
            math_add_Grade === 3 ? 3 :
            math_add_Grade === 4 ? 4 :
            math_add_Grade === 5 ? 5 : 0) + 0.0122 + 1.9694 *
            (math_edu_practice_Grade === 1 ? 1 :
            math_edu_practice_Grade === 2 ? 2 :
            math_edu_practice_Grade === 3 ? 3 :
            math_edu_practice_Grade === 4 ? 4 :
            math_edu_practice_Grade === 5 ? 5 : 0) + 0.0991 + 1.9206 *
            (math_programming_Grade === 1 ? 1 :
            math_programming_Grade === 2 ? 2 :
            math_programming_Grade === 3 ? 3 :
            math_programming_Grade === 4 ? 4 :
            math_programming_Grade === 5 ? 5 : 0) + 0.1491 + 2.0403 *
            (math_discrete_Grade === 1 ? 1 :
            math_discrete_Grade === 2 ? 2 :
            math_discrete_Grade === 3 ? 3 :
            math_discrete_Grade === 4 ? 4 :
            math_discrete_Grade === 5 ? 5 : 0) + 0.1268 + 2.3302 *
            (math_abstract_Grade === 1 ? 1 :
            math_abstract_Grade === 2 ? 2 :
            math_abstract_Grade === 3 ? 3 :
            math_abstract_Grade === 4 ? 4 :
            math_abstract_Grade === 5 ? 5 : 0) + 0.0482 + 2.1907 *
            (math_ode_Grade === 1 ? 1 :
            math_ode_Grade === 2 ? 2 :
            math_ode_Grade === 3 ? 3 :
            math_ode_Grade === 4 ? 4 :
            math_ode_Grade === 5 ? 5 : 0) + 0.0762 + 2.3495 *
            (math_prof_ofl_Grade === 1 ? 1 :
            math_prof_ofl_Grade === 2 ? 2 :
            math_prof_ofl_Grade === 3 ? 3 :
            math_prof_ofl_Grade === 4 ? 4 :
            math_prof_ofl_Grade === 5 ? 5 : 0) + 0.0207 + 2.3692 *
            (math_philosophy_Grade === 1 ? 1 :
            math_philosophy_Grade === 2 ? 2 :
            math_philosophy_Grade === 3 ? 3 :
            math_philosophy_Grade === 4 ? 4 :
            math_philosophy_Grade === 5 ? 5 : 0) + 0.0135)/23;

    if(average_math >= 1 && average_math <=2){
            document.getElementById("salary_math").innerHTML = "Ваша примерная заработная плата составляет до 199тыс тенге.<br>Результат основан на данных выпускников этих специальностей.";
    }
    if(average_math >2 && average_math <=3){
            document.getElementById("salary_math").innerHTML = "Ваша примерная заработная плата составляет от 200тыс до 399тыс тенге.<br> Результат основан на данных выпускников этих специальностей.";
    }
    if(average_math >3  && average_math <=4){
            document.getElementById("salary_math").innerHTML = "Ваша примерная заработная плата составляет от 400тыс до 599тыс тенге.<br> Результат основан на данных выпускников этих специальностей.";
    }
    if(average_math > 4 && average_math <=5){
            document.getElementById("salary_math").innerHTML = "Ваша примерная заработная плата составляет от 600тыс до 799тыс тенге.<br>Результат основан на данных выпускников этих специальностей.";
    }
    if(average_math > 5){
            document.getElementById("salary_math").innerHTML = "Ваша примерная заработная плата составляет больше 800тыс тенге.<br> Результат основан на данных выпускников этих специальностей.";
    }
};



