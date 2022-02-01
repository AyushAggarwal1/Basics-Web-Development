function fillup()
{
    nm = document.getElementById("name").value;
    rnn = document.getElementById("rn").value;
    sm = document.getElementById("sem").value;
    bth = document.getElementById("batch").value;
    // console.log(nm, rnn, sm, bth);
    document.getElementById("nm").innerText = nm;
    document.getElementById("rno").innerText = rnn;
    document.getElementById("s").innerText = sm;
    document.getElementById("bt").innerText = bth;
    m1 = document.getElementById("c1").value;
    m2 = document.getElementById("c2").value;
    m3 = document.getElementById("c3").value;
    m4 = document.getElementById("c4").value;
    m5 = document.getElementById("c5").value;
    document.getElementById("co1").innerText = findGrade(m1);
    document.getElementById("co2").innerText = findGrade(m2);
    document.getElementById("co3").innerText = findGrade(m3);
    document.getElementById("co4").innerText = findGrade(m4);
    document.getElementById("co5").innerText = findGrade(m5);
    document.getElementById("ce1").innerText = m1<40?0:4;
    document.getElementById("ce2").innerText = m2<40?0:4;
    document.getElementById("ce3").innerText = m3<40?0:4;
    document.getElementById("ce4").innerText = m4<40?0:4;
    document.getElementById("ce5").innerText = m5<40?0:4;
    document.getElementById("gpa").innerText = findCGPA(m1,m2,m3,m4,m5);
}

function findGrade(marks)
{
    if(marks>81)
    {
        grade = "A+";
    }

    if(marks>72 && marks<=81)
    {
        grade = "A";
    }
    
    if(marks>66 && marks<=72)
    {
        grade = "B+";
    }
    
    if(marks>61 && marks<=66)
    {
        grade = "B";
    }
    
    if(marks>55 && marks<=61)
    {
        grade = "C+";
    }
    
    if(marks>45 && marks<=55)
    {
        grade = "C";
    }
    
    if(marks>=40 && marks<=45)
    {
        grade = "D";
    }
    
    if(marks<40)
    {
        grade = "F";
    }
    
    return grade
}

function findCGPA(m1, m2, m3, m4, m5)
{
    totalGradePoint = 0;
    totalGradePoint = totalGradePoint + gradePoint(findGrade(m1))*4;
    totalGradePoint = totalGradePoint + gradePoint(findGrade(m2))*4;
    totalGradePoint = totalGradePoint + gradePoint(findGrade(m3))*4;
    totalGradePoint = totalGradePoint + gradePoint(findGrade(m4))*4;
    totalGradePoint = totalGradePoint + gradePoint(findGrade(m5))*4;
    console.log(totalGradePoint);
    cgpa = totalGradePoint/(4*5);
    return cgpa;
}

function gradePoint(grade)
{
    if(grade=="A+")
    { 
        return 10;
    }

    if(grade=="A")
    {  
        return 9;
    }

    if(grade=="B+")
    {  
        return 8;
    }

    if(grade=="B")
    {  
        return 7;
    }

    if(grade=="C+")
    {  
        return 6;
    }

    if(grade=="C")
    {  
        return 5;
    }

    if(grade=="D")
    {  
        return 4;
    }

    if(grade=="F")
    {  
        return 0;
    }
}