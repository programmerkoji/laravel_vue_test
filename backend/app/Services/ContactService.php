<?php

namespace App\Services;

use App\Repositories\Interfaces\ContactRepositoryInterface;

class ContactService
{
    public function __construct(
        protected ContactRepositoryInterface $contactRepository
    ) {}

    public function getAll()
    {
        return $this->contactRepository->all();
    }

    public function getById(int $id)
    {
        return $this->contactRepository->find($id);
    }

    public function create(array $data)
    {
        return $this->contactRepository->create($data);
    }

    public function update(int $id, array $data)
    {
        return $this->contactRepository->update($id, $data);
    }

    public function delete(int $id)
    {
        return $this->contactRepository->delete($id);
    }
}
