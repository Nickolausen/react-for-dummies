import Heading from "./Heading";
import Section from "./Section";

export default function HeadingsWithContext() {
    return (
        <Section>
            <Heading>Mega titolone</Heading>
            <Heading>Mega titolone</Heading>
            <Heading>Mega titolone</Heading>
            <Section>
                <Heading>Super titolone</Heading>
                <Heading>Super titolone</Heading>
                <Heading>Super titolone</Heading>
                <Section>
                    <Heading>Titolone</Heading>
                    <Heading>Titolone</Heading>
                    <Heading>Titolone</Heading>
                </Section>
            </Section>
        </Section>
    )
}