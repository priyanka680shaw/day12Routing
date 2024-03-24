import TestimonialCard from "./testimonalCard";

function Testimonial(){
    const TestimonialDiv = {
        display : "flex",
        flexWrap: "wrap",
        width : "95%",
        jusitfyContent : "center",
        alignItems : "center",
        margin : "auto"
    }

    const testimonialData  = [
        {
            "empName" : "Ankit",
            "empPosition" : "full Stack Developer",
            "chat" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem"
        },

        {
            "empName" : "Mohit",
            "empPosition" : "full Stack Developer",
            "chat" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem"
        },
        {
            "empName" : "Priyanka",
            "empPosition" : "full Stack DDeveloper",
            "chat" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem"
        },

        {
            "empName" : "Rimsha",
            "empPosition" : "full Stack DDeveloper",
            "chat" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem"
        },
        {
            "empName" : "Puja",
            "empPosition" : "full Stack DDeveloper",
            "chat" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem"
        },

        {
            "empName" : "Sakshi",
            "empPosition" : "full Stack DDeveloper",
            "chat" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem"
        }
    ];
    return(
       <div style={TestimonialDiv}>
             {
                testimonialData.map((data , index)=>(
                        <TestimonialCard empName = {data.empName} empPosition = {data.empPosition} key = {index}>{data.chat}</TestimonialCard>
                ))
                // {courseData.map((course, index)=>(
                //     <CourseCard name={course.name} hour={course.hour} key={index}/>
                // ))}
             }
       </div>
    );
}
export default Testimonial;