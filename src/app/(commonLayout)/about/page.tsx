export const dynamic="force-dynamic"

const AboutPage = async() => {

    await new Promise((resolve)=>setTimeout(resolve,4000));

    // throw new Error("something wrong ")

    return (
        <div>
            <h1>about new page page</h1>
        </div>
    );
};

export default AboutPage;