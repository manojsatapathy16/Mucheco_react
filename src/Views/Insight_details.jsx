import { React, useState, useEffect } from 'react';
import Header from './Header';
import Loader from '../components/Loader';
import { CallApi_Without_Token } from '../Services/Client';
import { API } from '../Services/Apis';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';


function Insight_details(props) {
    const location = useLocation();
    // const api_type = props.type
    const [detailsData, setDetailsData] = useState([]);
    const [loading, setLoading] = useState(false);
    // contact submit and validation
    const idFrom_PrevPage = location?.state?.id;

    useEffect(() => {
        getBlogByID();
    }, [])

    const getBlogByID = async () => {
        try {
            setLoading(true)
            var formdata = new FormData();
            formdata.append("request_type", 'get_blog_by_id');
            formdata.append("blog_id", idFrom_PrevPage);
            const data = await CallApi_Without_Token('POST', API.INSIGHT_PAGE, formdata)
            setLoading(false)
            if (data.status === 1) {
                setDetailsData(data)
                setLoading(false)
            } else {
                setLoading(false)
            }
        } catch (e) {
            setLoading(false)
        }

    }

    return (
        <>
            <div className="inner_pages_wrapper">
                <Header class_bg='black_bg' />

                <Loader show={loading} />
                <Helmet>
                    <title>{detailsData?.data?.meta_title}</title>
                    <meta name="description" content={detailsData?.data?.meta_description} />
                    <meta name="keywords" content={detailsData?.data?.meta_keyword} />
                </Helmet>

                {/* <!--====== Start insight Section ======--> */}
                <section className="blog-details-style pt-50 pb-95">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="blog-details-wrapper mb-35">
                                    <div className="blog-post-item wow fadeInUp">
                                        <div className="post-thumbnail">
                                            <img src={detailsData?.data?.media} alt="blog image" />
                                        </div>
                                        <div className="entry-content">

                                            <div className="post-meta">
                                                <ul>
                                                    <li><span><i className="far fa-calendar-alt"></i><a href="#">{detailsData?.data?.created_at}</a></span></li>
                                                </ul>
                                            </div>
                                            <h3 className="title">{detailsData?.data?.title}</h3>
                                            {detailsData?.data?.description ? <div dangerouslySetInnerHTML={{ __html: detailsData?.data?.description }}></div> : null}

                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!--====== End insight Section ======--> */}
            </div>


        </>
    );
}

export default Insight_details;