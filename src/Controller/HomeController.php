<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\LanguageRepository;
use App\Repository\UserRepository;

class HomeController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/api/users", name="users")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getUsers()
    {
        $users = [
            [
                'id' => 1,
                'name' => 'Olususi Oluyemi',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                'imageURL' => 'https://randomuser.me/api/portraits/women/50.jpg'
            ],
            [
                'id' => 2,
                'name' => 'Camila Terry',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                'imageURL' => 'https://randomuser.me/api/portraits/men/42.jpg'
            ],
            [
                'id' => 3,
                'name' => 'Joel Williamson',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                'imageURL' => 'https://randomuser.me/api/portraits/women/67.jpg'
            ],
            [
                'id' => 4,
                'name' => 'Deann Payne',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                'imageURL' => 'https://randomuser.me/api/portraits/women/50.jpg'
            ],
            [
                'id' => 5,
                'name' => 'Donald Perkins',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                'imageURL' => 'https://randomuser.me/api/portraits/men/89.jpg'
            ]
        ];

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($users));

        return $response;
    }

    /**
     * @Route("/api/gotest", name="gotest")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function gotest() {
        $tab = [
            ['key' => 1, 'name' => 'Alexis'],
            ['key' => 2, 'name' => 'Helene'],
            ['key' => 3, 'name' => 'Marty']
        ];

        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($tab));

        return $response;
    }

    /**
     * @Route("/api/languages", name="languages")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getLanguages(LanguageRepository $languagesRepository)
    {
        $languages = $languagesRepository->findAll();
        $data = [];
        foreach($languages as $languages) {
            $data[] = ['id' => $languages->getId(), 'name' => $languages->getName()];
        }

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($data));

        return $response;
    }

    /**
     * @Route("/api/profile", name="profile")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getProfile(UserRepository $userRepository)
    {
        $user = $userRepository->findBy(['id' => 1]);

        $data = [];
        foreach($user as $u) {
            $data[] = ['id' => $u->getId(), 'email' => $u->getEmail()];
        }

        $response = new Response();

        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');

        $response->setContent(json_encode($data));
        return $response;
    }
}
