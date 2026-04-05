function Skills() {
  const skills = [
    "C", "C++", "Python",
    "HTML", "CSS", "JavaScript",
    "React", "MySQL",
    "AWS", "Docker", "Linux", "Git"
  ];

  return (
    <section style={{padding: "30px"}}>
      <h2 style={{textAlign: "center"}}>Skills</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px"
      }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            background: "#4f46e5",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px"
          }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;