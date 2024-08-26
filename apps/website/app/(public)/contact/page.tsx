import { Header } from '@ems/common-ui';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div>
            <Header>Contact</Header>
            <p>This is the contact page.</p>
            <Image src="/nachos.png" alt="Nachos" width={600} height={400} />
        </div>
    );
}