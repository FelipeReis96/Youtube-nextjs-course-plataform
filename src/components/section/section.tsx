import Card from "@/components/card/card";

interface ISectionProps {
    title: string;
    variant: 'grid' | 'h-list';
}

export default function Section({title, variant='grid'}: ISectionProps)  {
    return (
        <div className="flex flex-col bg-[var(--card-color)] rounded-lg p-2 gap-4">
            <ul
            data-variant={variant} 
            className="flex flex-col gap-4 p-2 grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                    <Card
                        href=""
                        imageSrc="https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg"
                        title="Lorem Ipsum"
                        description="Remixing a Classic
                                    So how did the classical Latin become so incoherent? According to McC ntock, a 15th century typesetter  kely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.

                                    It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McC ntock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.

                                    And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.

                                    McC ntock wrote to Before & After to explain his discovery:

                                    “What I find remarkable is that this text has been the industry’s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional ‘ing’ or ‘y’ thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase ‘it’s Greek to me’ and ‘greeking’ have common semantic roots!” (The editors pub shed his letter in a correction head ned “Lorem Oopsum”).

                                    As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McC ntock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical  brary Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dang ng with “do-”, while another begins with the now ubiquitous “lorem ipsum”.

                                    Whether a medieval typesetter chose to garble a well-known (but non-Bib cal—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an odd way for Cicero to sail into the 21st century."
                    />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72" >
                    <Card
                        href=""
                        imageSrc="https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg"
                        title="Lorem Ipsum"
                        description="Remixing a Classic
                                    So how did the classical Latin become so incoherent? According to McC ntock, a 15th century typesetter  kely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.

                                    It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McC ntock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.

                                    And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.

                                    McC ntock wrote to Before & After to explain his discovery:

                                    “What I find remarkable is that this text has been the industry’s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional ‘ing’ or ‘y’ thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase ‘it’s Greek to me’ and ‘greeking’ have common semantic roots!” (The editors pub shed his letter in a correction head ned “Lorem Oopsum”).

                                    As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McC ntock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical  brary Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dang ng with “do-”, while another begins with the now ubiquitous “lorem ipsum”.

                                    Whether a medieval typesetter chose to garble a well-known (but non-Bib cal—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an odd way for Cicero to sail into the 21st century."
                    />
                </li>
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72" >
                    <Card
                        href=""
                        imageSrc="https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg"
                        title="Lorem Ipsum"
                        description="Remixing a Classic
                                    So how did the classical Latin become so incoherent? According to McC ntock, a 15th century typesetter  kely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.

                                    It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McC ntock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.

                                    And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.

                                    McC ntock wrote to Before & After to explain his discovery:

                                    “What I find remarkable is that this text has been the industry’s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional ‘ing’ or ‘y’ thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase ‘it’s Greek to me’ and ‘greeking’ have common semantic roots!” (The editors pub shed his letter in a correction head ned “Lorem Oopsum”).

                                    As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McC ntock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical  brary Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dang ng with “do-”, while another begins with the now ubiquitous “lorem ipsum”.

                                    Whether a medieval typesetter chose to garble a well-known (but non-Bib cal—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an odd way for Cicero to sail into the 21st century."
                    />
                </li >
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72" >
                    <Card
                        href=""
                        imageSrc="https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg"
                        title="Lorem Ipsum"
                        description="Remixing a Classic
                                    So how did the classical Latin become so incoherent? According to McC ntock, a 15th century typesetter  kely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.

                                    It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McC ntock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.

                                    And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.

                                    McC ntock wrote to Before & After to explain his discovery:

                                    “What I find rem1arkable is that this text has been the industry’s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional ‘ing’ or ‘y’ thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase ‘it’s Greek to me’ and ‘greeking’ have common semantic roots!” (The editors pub shed his letter in a correction head ned “Lorem Oopsum”).

                                    As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McC ntock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical  brary Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dang ng with “do-”, while another begins with the now ubiquitous “lorem ipsum”.

                                    Whether a medieval typesetter chose to garble a well-known (but non-Bib cal—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an odd way for Cicero to sail into the 21st century."
                    />
                </li >
                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                    <Card
                        href=""
                        imageSrc="https://i.ytimg.com/vi/WizgXUu8ZyI/hqdefault.jpg"
                        title="Lorem Ipsum"
                        description="Remixing a Classic
                                    So how did the classical Latin become so incoherent? According to McC ntock, a 15th century typesetter  kely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.

                                    It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McC ntock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.

                                    And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.

                                    McC ntock wrote to Before & After to explain his discovery:

                                    “What I find remarkable is that this text has been the industry’s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional ‘ing’ or ‘y’ thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase ‘it’s Greek to me’ and ‘greeking’ have common semantic roots!” (The editors pub shed his letter in a correction head ned “Lorem Oopsum”).

                                    As an alternative theory, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of De Finibus which challenges McC ntock's 15th century claims and suggests that the dawn of lorem ipsum was as recent as the 20th century. The 1914 Loeb Classical  brary Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dang ng with “do-”, while another begins with the now ubiquitous “lorem ipsum”.

                                    Whether a medieval typesetter chose to garble a well-known (but non-Bib cal—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it's admittedly an odd way for Cicero to sail into the 21st century."
                    />
                </li >
            </ul>
        </div>
    )
}