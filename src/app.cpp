#include <server.h>
#include <TicTacToe.h>

using namespace ucm;


int main(int argc, char** argv){

    CrowServer server(argc, argv);

    TicTacToe game;

    server.renderHTML("/", "index.html");

    server.route("/init", [&](const request& req, response& res){
        ucm::json ans = game.getBoard(); 

        res.sendJSON(ans);
    });

    server.route("/click", [&](const request& req, response& res){

        if (req.has_params({"x", "y"})){
            ucm::json ans;
            std::string xS = req.url_params.get("x");
            std::string yS = req.url_params.get("y");

            int x = stoi(xS);
            int y = stoi(yS);
            printf("click registered at %d , %d\n", x, y);
            if(x == 3 && y == 3){
                ans = game.Reset();
            }
            else{
                ans = game.clicked(x, y);
            }

            
            res.sendJSON(ans);

        }

        else{
            res.sendError400();
        }
        
    });

    server.run();
}
