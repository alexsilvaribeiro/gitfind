import { useState } from "react";
import Header from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

export default function Home() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetData = async () => {
    // Reset states
    setError("");
    setCurrentUser(null);
    setRepos(null);
    
    // Validar input vazio
    if (!user.trim()) {
      setError("Digite um nome de usuário do GitHub");
      return;
    }

    setLoading(true);

    try {
      // Buscar dados do usuário
      const userResponse = await fetch(`https://api.github.com/users/${user}`);
      
      if (!userResponse.ok) {
        throw new Error("Usuário não encontrado");
      }

      const userData = await userResponse.json();
      
      const { avatar_url, name, login, bio, public_repos } = userData;
      setCurrentUser({ avatar_url, name, login, bio, public_repos });

      // Buscar repositórios apenas se o usuário tiver repositórios públicos
      if (public_repos > 0) {
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=10`);
        
        if (!reposResponse.ok) {
          throw new Error("Erro ao carregar repositórios");
        }

        const reposData = await reposResponse.json();
        setRepos(reposData);
      } else {
        setRepos([]);
      }

    } catch (err) {
      setError(err.message);
      setCurrentUser(null);
      setRepos(null);
    } finally {
      setLoading(false);
    }
  };

  // Função para handle key press (Enter)
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGetData();
    }
  };

  return (
    <div>
      <Header />
      <div className="conteudo">  
        <img src={background} alt="background app" className="background" />
        <div className="info">
          <div className="search-container">
            <input
              name="usuario" 
              value={user} 
              onChange={(event) => setUser(event.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="@username" 
              disabled={loading}
              className="search-input"
            />
            <button 
              onClick={handleGetData} 
              disabled={loading || !user.trim()}
              className="search-button"
            >
              {loading ? "Buscando..." : "Buscar"}
            </button>
          </div>

          {/* Mensagem de erro */}
          {error && (
            <div className="error-message">
               {error}
            </div>
          )}

          
          {currentUser ? (
            <>
              <div className="perfil"> 
                <img 
                  src={currentUser.avatar_url} 
                  alt={currentUser.name || currentUser.login} 
                  className="profile"
                />
                <div className="profile-info"> 
                  <h3>{currentUser.name || currentUser.login}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio || "Este usuário não possui bio."}</p>
                  <div className="stats">
                    <span>Repositórios: {currentUser.public_repos}</span>
                  </div>
                </div>
              </div>
              <hr/>
            </>
          ) : null}

          {/* Repositórios */}
          <div className="repos-container"> 
            <h4 className="repositorio">
              Repositórios {repos && `(${repos.length})`}
            </h4>
            
            {repos && repos.length > 0 ? (
              repos.map(repo => (
                <ItemList 
                  key={repo.id}
                  title={repo.name} 
                  description={repo.description || "Sem descrição"} 
                />
              ))
            ) : repos && repos.length === 0 ? (
              <p className="no-repos">Este usuário não possui repositórios públicos.</p>
            ) : (
              // Placeholder inicial
              <>
                <ItemList title="Repo 1" description="Descrição do repositório 1"/>
                <ItemList title="Repo 2" description="Descrição do repositório 2"/>
                <ItemList title="Repo 3" description="Descrição do repositório 3"/>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}