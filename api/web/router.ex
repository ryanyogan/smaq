defmodule Smaq.Router do
  use Smaq.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Smaq do
    pipe_through :api
  end
end
