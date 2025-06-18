export const projectDefaultValues = {
    title: "",
    description: "",
    technologies: [],
    images: [],
    githubLink: "",
    demoLink: ""
}

export const expValues = {
    role: "",
    company: "",
    location: "",
    image: "",
    startDate: "2022-04-15T00:00:00.000Z",
    endDate: "2022-04-15T00:00:00.000Z",
    duties: []
}

export const expDefaultValues = {
  ...expValues,
  startDate: new Date(expValues.startDate),
  endDate: new Date(expValues.endDate),
};

export const eduValues = {
    degree: "",
    school: "",
    image: "",
    year: "2022-04-15T00:00:00.000Z",
    knowledge: []
}

export const eduDefaultValues = {
    ...eduValues,
    year: new Date(eduValues.year)
}


export const skillDefaultValues = {
    title: "",
    image: "",
    level: 1,
    category: "",
}