FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
RUN apt-get update && \
    apt-get install -y npm && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_11.x | bash - && \
    apt-get install -y build-essential nodejs && \
	apt-get update
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["portfolioPortal.csproj", "./"]
RUN dotnet restore "portfolioPortal.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "portfolioPortal.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "portfolioPortal.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "portfolioPortal.dll"]
