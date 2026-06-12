export function TwitterFollowCard ({ userName, name, isFollowing }){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar de alguien" src="https://pfpzen.com/wp-content/uploads/2026/03/Deafult-PFP-_-@davy3k.jpg" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-name'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}