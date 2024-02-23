//my styles
import "../../styles/blogPage.scss";
import Articles from "../../components/articles";
import Tag from "../../components/tag";
import LatestArticle from "../../components/latestArticle";

function ArticleContent() {
    return(
        <main>
            <div className="hero_container">
                <div className="hero">
                    <div className="page_info">
                        <h1>Articles</h1>
                        <p>I like to blog about stuff like productivity, business, YouTube, and other stuff I'm interested in. Hopefully you'll find some of it interesting too.</p>
                    </div>
                    <div className="latest_articles">
                        <LatestArticle
                            name='article title'
                            image='/wallpaperflare.com_wallpaper (2).jpg'
                            title='article woow'
                            date='25 jan 2024'
                            description='I like to blog about stuff like productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too. productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too.'
                        />
                    </div>
                </div>
            </div>
            <div className="articles_section">
                <div className="search_section">
                    <h1>browse topics</h1>
                    <form action="">
                        <input name="search" type="text" placeholder="search anything you want"  required/>
                        <button>search</button>
                    </form>
                    <div className="tags">
                        <Tag 
                            title='writing'
                        />
                        <Tag 
                            title='writing'
                        />
                        <Tag 
                            title='writing'
                        />
                        <Tag 
                            title='writing'
                        />
                        <Tag 
                            title='writing'
                        />
                    </div>

                </div>
                <div className="articles_container">
                    <h1>All Articles</h1>
                    <Articles
                        name='article title'
                        image='/wallpaperflare.com_wallpaper (2).jpg'
                        title='article woow'
                        date='25 jan 2024'
                        description='I like to blog about stuff like productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too. productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too.'
                    />
                    <Articles
                        name='article title'
                        image='/wallpaperflare.com_wallpaper (2).jpg'
                        title='article woow'
                        date='25 jan 2024'
                        description='I like to blog about stuff like productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too. productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too.'
                    />
                    <Articles
                        name='article title'
                        image='/wallpaperflare.com_wallpaper (2).jpg'
                        title='article woow'
                        date='25 jan 2024'
                        description='I like to blog about stuff like productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too. productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too.'
                    />
                    <Articles
                        name='article title'
                        image='/wallpaperflare.com_wallpaper (2).jpg'
                        title='article woow'
                        date='25 jan 2024'
                        description='I like to blog about stuff like productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too. productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too.'
                    />
                    <Articles
                        name='article title'
                        image='/wallpaperflare.com_wallpaper (2).jpg'
                        title='article woow'
                        date='25 jan 2024'
                        description='I like to blog about stuff like productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too. productivity, business, YouTube, and other stuff Im interested in. Hopefully youll find some of it interesting too.'
                    />
                </div>
            </div>
        </main>

    )
}
export default ArticleContent;
