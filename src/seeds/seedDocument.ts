import { AppDataSource } from "../config/dbConfig";


const seedDocument = async () => {
    // await AppDataSource.initialize();

    // const documentRepository = AppDataSource.getRepository(DocumentType);

    // const documentTypes = [
    //     { name: "Certificate", description: "A document that certifies completion of a course, training, or achievement in a specific area." },
    //     { name: "Publication", description: "A document or article that has been published in a journal, magazine, or other medium." },
    //     { name: "Recommendation Letter", description: "A letter written by someone who can vouch for your skills, character, and achievements." },
    //     { name: "Resume", description: "A document summarizing your professional experience, education, and skills." },
    //     { name: "Portfolio", description: "A collection of work samples showcasing your skills, experience, and accomplishments." },
    //     { name: "Cover Letter", description: "A letter sent with a resume to provide additional information about your qualifications." }
    // ];

    // for (const documentType of documentTypes) {
    //     const existingDocumentType = await documentRepository.findOne({ where: { name: documentType.name } });
    //     if (!existingDocumentType) {
    //         const newDocument = documentRepository.create(documentType);
    //         await documentRepository.save(newDocument);
    //     }
    // }

    // console.log("Document type seeded successfully");
    // await AppDataSource.destroy();
};

seedDocument().catch((error) => {
    console.error("Error seeding Document type", error);
    process.exit(1);
});