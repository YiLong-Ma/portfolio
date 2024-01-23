import styles from '../styles/caseStudy.module.css';
import CardComponent from '@/components/CardComponent';

export default function CaseStudy() {
    return (
        <>
            <main>
                <h1>Project 1</h1>
                <h1>Project 2</h1>
                <h1>Project 3</h1>
                <h1>Project 4</h1>
                <div>
                    <CardComponent
                        imageUrl="/images/test.jpg"
                        title="Your Card Title"
                        description="Your card description goes here."
                    />
                </div>
            </main>
        </>
    );
}