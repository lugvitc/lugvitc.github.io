import TechnicalCommonQuestions from './technical/technical_common';
import TechnicalLinuxQuestions from './technical/linux';
import TechnicalFrontendQuestions from './technical/frontend';
import TechnicalBackendQuestions from './technical/backend';
import TechnicalCybersecQuestions from './technical/cybersec';
import TechnicalDevopsQuestions from './technical/devops';
import TechnicalCpQuestions from './technical/cp';
import ManagementCommonQuestions from './management/management_common';
import OperationsCommonQuestions from './operation/operation_common';
import MediaCommonQuestions from './media/media_common';
import MediaGraphicsQuestions from './media/graphics';
import MediaPhotographyQuestions from './media/photography';
import MediaSocialMediaQuestions from './media/social_media';
import MediaVideoQuestions from './media/video';
import ContentCommonQuestions from './content/content_common';


export default function RecruitmentQuestions({values, prefDept, handleChange}){
    return (
        prefDept === 'Technical Department' ?
                    <div>
                        <TechnicalCommonQuestions handleChange={handleChange} values={values} />
                        <TechnicalLinuxQuestions handleChange={handleChange} values={values} />
                    </div>
                    :
                    prefDept === 'Technical Department - Frontend' ?
                    <div>
                        <TechnicalCommonQuestions handleChange={handleChange} values={values} />
                        <TechnicalFrontendQuestions handleChange={handleChange} values={values} />
                    </div>
                    :
                    prefDept === 'Technical Department - Backend' ?
                    <div>
                        <TechnicalCommonQuestions handleChange={handleChange} values={values} />
                        <TechnicalBackendQuestions handleChange={handleChange} values={values} />
                    </div>
                    :
                    prefDept === 'Technical Department - Cybersec' ?
                    <div>
                        <TechnicalCommonQuestions handleChange={handleChange} values={values} />
                        <TechnicalCybersecQuestions handleChange={handleChange} values={values} />
                    </div>
                    :
                    prefDept === 'Technical Department - DevOps' ?
                    <div>
                        <TechnicalCommonQuestions handleChange={handleChange} values={values} />
                        <TechnicalDevopsQuestions handleChange={handleChange} values={values} />
                    </div>
                    :
                    prefDept === 'Technical Department - CP' ?
                    <div>
                        <TechnicalCommonQuestions handleChange={handleChange} values={values} />
                        <TechnicalCpQuestions handleChange={handleChange} values={values} />
                    </div>
                    :
                    prefDept === 'Management Department' ?
                        <div>
                            <ManagementCommonQuestions handleChange={handleChange} values={values} />
                        </div>
                        :
                        prefDept === 'Operations Department' ?
                            <div>
                                <OperationsCommonQuestions handleChange={handleChange} values={values} />
                            </div>
                            :
                            prefDept === 'Media Department - Video' ?
                            <div>
                                <MediaCommonQuestions handleChange={handleChange} values={values} />
                                <MediaVideoQuestions handleChange={handleChange} values={values} />
                            </div>
                            :
                            prefDept === 'Media Department - Photography' ?
                            <div>
                                <MediaCommonQuestions handleChange={handleChange} values={values} />
                                <MediaPhotographyQuestions handleChange={handleChange} values={values} />
                            </div>
                            :
                            prefDept === 'Media Department - Social Media Engagement' ?
                            <div>
                                <MediaCommonQuestions handleChange={handleChange} values={values} />
                                <MediaSocialMediaQuestions handleChange={handleChange} values={values} />
                            </div>
                            :
                            prefDept === 'Media Department - Graphics Design' ?
                            <div>
                                <MediaCommonQuestions handleChange={handleChange} values={values} />
                                <MediaGraphicsQuestions handleChange={handleChange} values={values} />
                            </div>
                            :
                            prefDept === 'Content Department' ?
                            <div>
                                <ContentCommonQuestions handleChange={handleChange} values={values} />
                            </div>
                            :
                                    <></>

                
    )
}