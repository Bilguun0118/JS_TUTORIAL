//sort: массивын элементүүдийг өсөх дарааллаар байрлуулна. Sort нь буцаан дуудлагын функцийг авдаг бөгөөд бид дараа дараагийн хэсгүүдэд эрэмбэлэх функцийг хэрхэн ашиглахыг харах болно.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]