import Link from 'next/link';


export default function LangChanger({lang}) {

  return (
    <Link href={lang.next_link} passHref>
        {lang.next_lang}
  </Link>
  );
}
