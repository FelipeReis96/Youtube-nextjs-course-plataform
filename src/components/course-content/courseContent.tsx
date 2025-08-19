import { IClassGroupProps } from "./class-group";
import ClassGroup from "./class-group";




interface ICourseContentProps {
    itemsCourse: IClassGroupProps[];
}


export default function CourseContent({itemsCourse}: ICourseContentProps) {
    return (
        <div className="mt-4">
            <h3 className="font-bold text-lg">Course content</h3>
        <ul className="flex flex-col mt-2">
            {itemsCourse.map((item,index) => (
            <li key={index}>
                <ClassGroup groupTitle={item.groupTitle} groupItems={item.groupItems} />
            </li>
            ))}
        </ul>
        </div>
    )
}