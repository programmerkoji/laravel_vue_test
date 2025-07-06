<?php

namespace App\Services;

use App\Repositories\Interfaces\ContactRepositoryInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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
        DB::beginTransaction();

        try {
            $contact = $this->contactRepository->create($data);
            DB::commit();
            return $contact;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('登録失敗: ' . $e->getMessage());
            throw $e;
        }
    }

    public function update(int $id, array $data)
    {
        DB::beginTransaction();

        try {
            $contact = $this->contactRepository->update($id, $data);
            DB::commit();
            return $contact;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('更新失敗: ' . $e->getMessage());
            throw $e;
        }
    }

    public function delete(int $id)
    {
        return $this->contactRepository->delete($id);
    }
}
