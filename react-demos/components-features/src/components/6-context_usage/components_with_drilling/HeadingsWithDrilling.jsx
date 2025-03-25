import Heading from "./Heading";
import Section from "./Section";

export default function HeadingsWithDrilling() {
    return (
        <Section>
            <Heading level={1}>Mega titolone</Heading>
            <Heading level={1}>Mega titolone</Heading>
            <Heading level={1}>Mega titolone</Heading>
            <Section>
                <Heading level={2}>Super titolone</Heading>
                <Heading level={2}>Super titolone</Heading>
                <Heading level={2}>Super titolone</Heading>
                <Section>
                    <Heading level={3}>Titolone</Heading>
                    <Heading level={3}>Titolone</Heading>
                    <Heading level={3}>Titolone</Heading>
                </Section>
            </Section>
        </Section>
    )
}